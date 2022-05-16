export default function pluralize(word: string, amoun: number) {
  if (amoun === 1) return word;
  return `${word}s`;
}
