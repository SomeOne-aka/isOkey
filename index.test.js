const { isOkey } = require("./index"); // Replace with the actual path to your module

describe("isOkey", () => {
  test("should return true when random number is 0", () => {
    // Mock the random number to always return 0
    Math.floor = jest.fn(() => 0);
    expect(isOkey()).toBe(true);
  });

  test("should return false when random number is 1", () => {
    // Mock the random number to always return 1
    Math.floor = jest.fn(() => 1);
    expect(isOkey()).toBe(false);
  });
});
