export function format(first: string, middle: string, last: string): string {
  return (first ?? '') + (middle.length > 0 ? ` ${middle}` : '') + (last.length > 0 ? ` ${last}` : '');
}
