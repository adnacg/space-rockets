import { formatDateTime } from "./format-date";

test('preserves timezone during date formatting', () => {
  expect(formatDateTime("2020-11-21T09:17:00-08:00")).toBe("November 21, 2020, 9:17:00 AM GMT-8");
  expect(formatDateTime("2020-11-05T18:24:00-05:00")).toBe("November 5, 2020, 6:24:00 PM GMT-5");
  expect(formatDateTime("2020-10-24T11:31:00-04:00")).toBe("October 24, 2020, 11:31:00 AM GMT-4");
});