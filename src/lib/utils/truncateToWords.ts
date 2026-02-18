/**
 * Truncates a string to the first N words.
 * @param {string} str The input string.
 * @param {number} n The number of words to keep.
 * @returns {string} The truncated string.
 */
export const truncateToWords = (str: string, n: number): string => {
  const words = str.trim().split(/\s+/);
  const firstNWords = words.slice(0, n);
  const result = firstNWords.join(" ");

  return result;
};
