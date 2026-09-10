const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const namedDate = new RegExp(
  `\\b(${months.join('|')})\\s+` +
    '(?:\\d{1,2}(?:\\s*[-–—]\\s*\\d{1,2})?\\s*,?\\s+)?' +
    '\\(?(\\d{4})\\)?',
  'g',
);

// Display month precision; retain full dates in the source and year-only values.
export const formatYearMonth = (value: string): string =>
  value
    .replace(
      namedDate,
      (_, month: string, year: string) =>
        `${year}/${String(months.indexOf(month) + 1).padStart(2, '0')}`,
    )
    .replace(
      /\b(\d{4})[/-](0?[1-9]|1[0-2])(?:[/-]\d{2})?\b/g,
      (_, year: string, month: string) => `${year}/${month.padStart(2, '0')}`,
    );

// Format visible prose only, leaving link URLs and other HTML attributes intact.
export const formatDatesInHtml = (html: string): string =>
  html
    .split(/(<[^>]*>)/g)
    .map((part) => (part.startsWith('<') ? part : formatYearMonth(part)))
    .join('');
