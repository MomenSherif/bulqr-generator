export default function generateRandomString(length: number = 5): string {
  return (Math.random() + 1).toString(36).slice(-length);
}
