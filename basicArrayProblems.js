const printArrayElement = require("./basic-problems/array-problems")
//Print elements of my array

// const myArray = [2, 4, 6, 7, 9, 26, 76]
// console.log("The length of array: ", myArray.length)

// for (let i=0; i<myArray.length; i++){
//     console.log("Elements of array", myArray[i])
// }

// for (const i in myArray){
//     console.log("Elements of array", myArray[i])
// }

// for (const val of myArray){
//     console.log("Elements of array", val)
// }

// let i = 0
// while(i<myArray.length){
//     console.log("The elements of array: ", myArray[i])
//     i+=1
// }

// for (let i=myArray.length-1; i>=0; i--){
//     console.log("Elements of array", myArray[i])
// }
// //find the maximum number in array
// let myArray1 = [2, 4, 8, 5, 7, 1, 10];
// let maxNumber1 = myArray1[0];

// for (let i=1; i<myArray1.length; i++){
//     if(myArray1[i]>maxNumber1){
//         maxNumber = myArray1[i];
//     }
    
// }
// console.log("Max number is:", maxNumber1);

let myArray = [2, 4, 6, 7, 9, 26, 76];
console.log("Total element of array: ", myArray.length);
for (let i = 0;  i <myArray.length; i++){
    console.log("Elements of Array: ", myArray[i]);
}

let maxNumber = myArray[0]; // Assume the first number is the largest

for(let i = 1; i < myArray.length; i++)
{
    if (myArray[i]>maxNumber){
        maxNumber = myArray[i];
    }
}
console.log("The maximum number is: ", maxNumber);

let minNumber = myArray[0];

for (let i = 1; i < myArray.length; i++)
{
    if (myArray[i]<minNumber){
        minNumber = myArray[i];
    }
}
console.log("The minimum number: ", minNumber);
