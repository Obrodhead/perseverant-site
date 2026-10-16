// The six services work as one system in three stages. Each service file sets `stage`.
// The homepage rings art, the services lists and each service page read from this.
export const stages = [
  {
    id: 'understood',
    num: '01',
    name: 'Be understood',
    line: 'Prospects research before they reach out. When they ask Google or an AI assistant, the answer should describe you the way you would.',
  },
  {
    id: 'reach',
    num: '02',
    name: 'Meet them in the middle',
    line: 'Many good prospects are not searching yet. Paid social and events go to them with a useful reason to raise a hand.',
  },
  {
    id: 'follow-through',
    num: '03',
    name: 'Follow through',
    line: 'Interest fades fast. Replies go out in minutes, a person takes it from there, and every lead is tracked to a booked appointment.',
  },
] as const;

export type StageId = (typeof stages)[number]['id'];

export function stageOf(id: string) {
  return stages.find((s) => s.id === id)!;
}
