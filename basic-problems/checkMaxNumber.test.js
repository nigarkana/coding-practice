const maxNumber = require("./checkMaxNumber")

test("return the maximum number", () => {
    let testCases = [
        {
            name: "case-1",
            input: [2, 3, 4, 5, 2, 3, 4],
            expected: 5,
        },
        {
            name: "case-2",
            input: [2, 3, 4, 50, 2, 3, 4],
            expected: 50,
        },
        {
            name: "case-3",
            input: [],
            expected: 0,
        },
        {
            name: "case-4",
            input: [11, 12],
            expected: 12,
        },
        {
            name: "faile-case",
            input: [11, 12],
            expected: 1,
        },
    ]

    for(const testCase of testCases) {
        expect(maxNumber(testCase.input)).toBe(testCase.expected);
        // try{
        //     let received = maxNumber(testCase.input)
        //     expect(received === testCase.expected).toBeTruthy();
        // } catch(e) {
        //     throw new Error(`test case fail in "${testCase.name}"`)
        // }
    }
})
