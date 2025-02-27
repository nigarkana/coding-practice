const minNumber = require("./checkMinNumber")

test ("Return minimum number", ()=>{

    expect(minNumber([2, 3, 4, 5, 2, 3, 4])).toBe(2);

})