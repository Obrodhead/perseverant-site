"""Render every guide version in dist/ to a branded PDF in public/downloads/.

Run with `npm run pdfs` (builds the site, renders the PDFs, then builds again so the
"Download the PDF" buttons appear). Commit the PDFs in public/downloads/.
Needs Python 3 with Playwright and Chromium: pip install playwright && playwright install chromium.
Fonts come from the @fontsource dev dependencies, so no network access is needed.
"""
import functools, http.server, pathlib, socketserver, threading, sys

from playwright.sync_api import sync_playwright

ROOT = pathlib.Path(__file__).resolve().parent.parent
DIST = ROOT / "dist"
OUT = ROOT / "public" / "downloads"
FONTS = ROOT / "node_modules" / "@fontsource"

FACES = [  # family, package, file stem, weight, style
    ("Schibsted Grotesk", "schibsted-grotesk", "schibsted-grotesk-latin-500-normal", 500, "normal"),
    ("Schibsted Grotesk", "schibsted-grotesk", "schibsted-grotesk-latin-600-normal", 600, "normal"),
    ("Schibsted Grotesk", "schibsted-grotesk", "schibsted-grotesk-latin-700-normal", 700, "normal"),
    ("Source Serif 4", "source-serif-4", "source-serif-4-latin-400-normal", 400, "normal"),
    ("Source Serif 4", "source-serif-4", "source-serif-4-latin-400-italic", 400, "italic"),
    ("Source Serif 4", "source-serif-4", "source-serif-4-latin-600-normal", 600, "normal"),
    ("IBM Plex Mono", "ibm-plex-mono", "ibm-plex-mono-latin-400-normal", 400, "normal"),
    ("IBM Plex Mono", "ibm-plex-mono", "ibm-plex-mono-latin-500-normal", 500, "normal"),
]

FOOTER = (
    '<div style="width:100%;font-size:8px;color:#55625a;font-family:Helvetica,Arial,sans-serif;'
    'padding:0 0.65in;display:flex;justify-content:space-between;">'
    '<span>Perseverant Digital · perseverantdigital.com · connect@perseverantdigital.com</span>'
    '<span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'
)


def font_css(port):
    rules = []
    for family, pkg, stem, weight, style in FACES:
        rules.append(
            f"@font-face{{font-family:'{family}';font-style:{style};font-weight:{weight};"
            f"font-display:block;src:url(http://127.0.0.1:{port}/__fonts/{pkg}/{stem}.woff2) format('woff2');}}"
        )
    return "\n".join(rules)


def main():
    pages = sorted(DIST.glob("guides/*/index.html")) + sorted(DIST.glob("guides/*/*/index.html"))
    if not pages:
        sys.exit("No guide pages in dist/. Run `npm run build` first.")
    OUT.mkdir(parents=True, exist_ok=True)

    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *args):
            pass

    handler = functools.partial(Quiet, directory=str(DIST))
    with socketserver.TCPServer(("127.0.0.1", 0), handler) as httpd:
        port = httpd.server_address[1]
        threading.Thread(target=httpd.serve_forever, daemon=True).start()
        css = font_css(port)

        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.route("https://fonts.googleapis.com/**", lambda r: r.fulfill(status=200, content_type="text/css", body=css))
            page.route("https://fonts.gstatic.com/**", lambda r: r.abort())
            page.route(
                f"http://127.0.0.1:{port}/__fonts/**",
                lambda r: r.fulfill(
                    status=200,
                    content_type="font/woff2",
                    body=(FONTS / r.request.url.split("/__fonts/")[1].split("/")[0] / "files" / r.request.url.rsplit("/", 1)[1]).read_bytes(),
                ),
            )
            for html in pages:
                rel = html.relative_to(DIST / "guides").parent.parts  # (guide,) or (guide, industry)
                name = "perseverant-digital-" + "-".join(rel) + ".pdf"
                page.goto(f"http://127.0.0.1:{port}/guides/{'/'.join(rel)}/", wait_until="networkidle")
                page.evaluate("document.fonts.ready")
                page.emulate_media(media="print")
                page.pdf(
                    path=str(OUT / name),
                    format="Letter",
                    print_background=True,
                    display_header_footer=True,
                    header_template="<span></span>",
                    footer_template=FOOTER,
                    margin={"top": "0.6in", "bottom": "0.75in", "left": "0.65in", "right": "0.65in"},
                )
                print("wrote", name)
            browser.close()
        httpd.shutdown()


if __name__ == "__main__":
    main()
