export function cleanLink(input: string): string {
  try {
    const url = new URL(input);
    return `${url.protocol}//${url.hostname}`;
  } catch {
    throw new Error("Invalid URL");
  }
}
