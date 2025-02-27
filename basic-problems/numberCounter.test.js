const numCount = require("./numberCounter")

test("return the number of count", () => {
    const arr = [2, 3, 4, 5, 2, 3, 4]
    const number = 2
    const count = numCount(arr, number)
    
    expect(count).toBe(2)
    
    expect(numCount(arr, number)).toBe(2)

    expect(numCount([2, 3, 4, 5, 2, 3, 4], number)).toBe(2)

    expect(numCount([2, 3, 4, 5, 2, 3, 4], 2)).toBe(2)

    expect(numCount([2, 3, 4, 5, 2, 3, 4], 5)).toBe(1)

    expect(numCount([2], 5)).toBe(0)

    expect(numCount([2, 2, 3, 4], 5)).toBe(0)

    expect(numCount([2, 2, 3, 4], 5)).toBe(0)
})