import { formatToShort } from "./dateHelper";

describe("formatToShort function", () => {
  test("formatToShort should return true", () => {
    const expectedDate = "Apr 28, 2021";
    const date = new Date("4/28/2021");
    const actualDate = formatToShort(date.toUTCString());
    expect(expectedDate).toEqual(actualDate);
  });

});
