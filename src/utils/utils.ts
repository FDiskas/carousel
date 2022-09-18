export function postfixDimensions(value: string): string {
  return parseInt(value).toString() === value ? `${value}px` : value;
}
