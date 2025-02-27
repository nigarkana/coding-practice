const printArrayElement = require("./basic-problems/array-problems")

// printArrayElement([1, 2])
// // printArray([10,12])
// // printArray([10,12, 18, 99])
// printArrayElement([10,12, 18, 99, 1000])

// //Example 1
// var myArray = []
// myArray.push(1);
// myArray.push(2);
// myArray.push(3);
// console.log(myArray)

////Example 2
/*
Connect the firstName and lastName to construct the variable fullName, but with a space (" ") in between the first and last name.
Multiply the variable myNumber by 2 and put the result in meaningOfLife.*/
// var firstName = "Nigar"
// var lastName = "Kana"
// var fullName = firstName + " " + lastName
// console.log(fullName)

// var myNumebr = 21
// var meaningOfLife= myNumebr *= 2;
// console.log(meaningOfLife);

////Example 3
// var name="Mahid"
// if (confirm("Are you Mahid"))
// {
//     console.log("Hello, Mahid");
// } else{
//     console.log("what's your name then")
// }

// //Example 4
// myNumber = '42'
// if (myNumber===42) 
// {
//     console.log("the number is correct!")
// } else{
//     console.log("The number is false")
// }

//Example 5
/*In this exercise, you must construct an if inside the checkNumber function statement
that checks if the number myNumber is equal to 42. If that is the case, the function must 
print out using console.log the word correct. If myNumber is not equal to 42, the function 
must print out using console.log the word incorrect. You can name the argument passed to a 
function by supplying the name inside the parentheses. For example, function myFunction(myArgument).*/

// var myNumber = 42;
// myFunction()

//Example 6
//Define a function called multiplyFive which accepts a number and returns that number multiplied by 5.

// function multiplyFive(num){
//     return 6 * num;
// }
// console.log(multiplyFive(5))

// //Example 7
// var multiplyFive = function (number) {
//     return number * 5;
// }
// console.log(multiplyFive(3));
// console.log(multiplyFive(4));


// function checkNumber (myNumber){
//     if(myNumber===42)
//     {
//         console.log("Correct!")
       
//     }
//     else
//     {
//         console.log("Incorrect!")
//     }
    
// }
// checkNumber(3);
// checkNumber(12);
// checkNumber(42);

// //Example 8
// var myArray = ["a", "b", "c"];
// for (var i = 0; i<myArray.length; i++)
// {
//     console.log("The family member of my array are ", myArray[i], "and index are ", + i )
// }
//empty object
//var myObject = {};
// var personObject = {
//     firstName: "Mahid",
//     lastName: "Shah",
//     fullName:function() {
//         return this.firstName + " " + this.lastName
//     }
// }
// console.log(personObject.fullName());
// console.log(personObject.firstName);
// console.log(personObject["lastName"]);

// Example 10
// You must define an object called person with the following members:

// The member firstName of the person is "Jack"
// The member lastName of the person is "Smith"
// The member age of the person is 19
// The member employed of the person is true

// var person = {
//     firstName: "Masud",
//     lastName: "Smith",
//     age: 19,
//     is_employed: true
// }
// console.log(person.firstName);
// for (var member in person)
// {
//     if(person.hasOwnProperty(member))
//     {
//         console.log("The member ", member, "of person object is", person[member])
//     }
// }
//Example 12
// var test = prompt("Type Hi!");
// console.log(test);
var myArrary = [1,2,3,4,5]
// console.log("Length of my Array: ", myArrary.length)
// for(let i = 0; i < myArrary.length; i++)
// {
//     console.log("Elements of my array is: ", myArrary[i])
// }


//Python code 
// #Print elements of my array

// myArray = [2, 4, 6, 7, 9, 26, 76]
// print("The length of array: ", len(myArray))

// # for i, _ in enumerate(myArray):
// #     print("Elements of array", i, myArray[i])
   
// for i in range(len(myArray)):
//     print("Elements of array", i, myArray[i])

// # for val in myArray:
// #     print("Elements of array", val)

// # i = 0
// # while(i<len(myArray)):
// #     print("The elements of array: ", myArray[i])
// #     i+=1
    
// # for i in reversed(range(len(myArray))):
// #     print("Elements of array", i, myArray[i])

// i = len(myArray)-1
// while(i>=0):
//     print("The element of array: ", myArray[i])
//     i-=1


function addition(a, b) {        
    let sum = a + b   
    return sum
}

console.log(addition(10, 100)) 

// arrow function
const additionArrow = (a, b) => {        
    let sum = a + b   
    return sum
}

console.log(additionArrow(10, 1000))

