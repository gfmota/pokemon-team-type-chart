export const capitalize = (name: string) =>
  name
    .split('-')
    .map((str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`)
    .join(' ');
