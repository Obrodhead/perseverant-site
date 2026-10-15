// Guides are written once with industry blocks:
//   <!-- industry:law-firms,elective-healthcare --> ... <!-- /industry -->
// Each rendered version keeps only the blocks for its industry. "other" is the general version.
export const GENERAL = 'other';

const BLOCK = /<!--\s*industry:([a-z0-9,\s-]+?)\s*-->([\s\S]*?)<!--\s*\/industry\s*-->/g;

export function forIndustry(html: string, industry: string) {
  return html.replace(BLOCK, (_m, ids: string, body: string) =>
    ids.split(',').map((s) => s.trim()).includes(industry) ? body : '',
  );
}

export function guidePath(guideId: string, industry?: string) {
  return industry && industry !== GENERAL ? `/guides/${guideId}/${industry}/` : `/guides/${guideId}/`;
}
