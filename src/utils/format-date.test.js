import { formatDateTime } from "./format-date";

describe("formatDateTime", function () {
  it("does not preserve timezone during date formatting by default", () => {
    expect(formatDateTime("2020-11-21T09:17:00-08:00")).not.toBe(
      "November 21, 2020, 9:17:00 AM -08:00"
    );
    expect(formatDateTime("2020-11-05T18:24:00-05:00")).not.toBe(
      "November 5, 2020, 6:24:00 PM -05:00"
    );
    expect(formatDateTime("2020-10-24T11:31:00-04:00")).not.toBe(
      "October 24, 2020, 11:31:00 AM -04:00"
    );
  });

  it("preserves timezone during date formatting if preserveTimezone is true", () => {
    expect(formatDateTime("2020-11-21T09:17:00-08:00", true)).toBe(
      "November 21, 2020, 9:17:00 AM -08:00"
    );
    expect(formatDateTime("2020-11-05T18:24:00-05:00", true)).toBe(
      "November 5, 2020, 6:24:00 PM -05:00"
    );
    expect(formatDateTime("2020-10-24T11:31:00-04:00", true)).toBe(
      "October 24, 2020, 11:31:00 AM -04:00"
    );
  });
});
