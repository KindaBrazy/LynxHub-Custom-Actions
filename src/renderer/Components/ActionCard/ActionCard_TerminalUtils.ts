/**
 * Escapes special characters in a string for use in a regular expression.
 */
function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Extracts a URL from terminal output that contains a specific keyword.
 * @param input - The raw string data from the terminal.
 * @param keyword - The keyword to search for (e.g., "To see the GUI go to").
 * @returns The captured URL string or undefined if not found.
 */
export function catchTerminalAddress(input: string, keyword: string): string | undefined {
  const escapedKeyword = escapeRegExp(keyword);
  const pattern = new RegExp(`${escapedKeyword}.*?:\\s*.*?(https?:\\/\\/.*?)(?=\\s|\\u001b|$)`, 'i');

  const match: RegExpMatchArray | null = input.match(pattern);
  if (match) {
    return match[1];
  }

  return undefined;
}
