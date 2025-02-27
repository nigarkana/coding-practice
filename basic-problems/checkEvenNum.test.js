const ifEven = require("./checkEvenNum")

test ("Return the even numbers", ()=>{
    expect (ifEven(12)).toBe(true);
    expect (ifEven(21)).toBe(false);
})