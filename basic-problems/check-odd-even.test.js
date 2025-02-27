const ifOdd = require("./check-odd-even")

test("return false if the number is even", () => {
    expect(ifOdd(12)).toBe(false);
});

test("return true if the number is odd", () => {
    expect(ifOdd(13)).toBe(true);
});