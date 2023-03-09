// Problem 1: A function named mindGame is given. It takes positive number of arguments. If a number is given, then it will multiply the number by 3, addition by 10, division by 2, subtract by 5 and then return the result.

function mindGame(number) {
    const multiply = number * 3;
    const addition = multiply + 10;
    const division = addition / 2;
    const subtract = division - 5;
    
    return subtract;
}
const inputGiven = 33;
const result = mindGame(inputGiven);
console.log(result);


// Problem 2: A function called evenOdd, it takes string and calculate the total character in it. If the total number is odd then it returns odd and if even then returns even.

function evenOdd(string) {
    if( string.length % 2 === 0){
        return console.log("even");
    }
    else if( string.length % 2 !== 0){
        return console.log("odd");
    }
}

const givenString = "Batch7";
const stringOutput = evenOdd(givenString);


// Problem 3: A function called isLGSeven, it takes number as input. You have to differentiate between input and 7. If the difference is less than 7, return the subtraction otherwise return double of the input value.

function isLGSeven(num) {
    if (num - 7 < 7){
        return (num - 7);
    }
    else if(num - 7 >= 7){
        return num*2;
    }
}

const numInput = 15;
const numOutputIs = isLGSeven(numInput);
console.log(numOutputIs)


// Problem 4: A function named findingBadData, which takes array as input. Array may contain positive or negative numbers. If function finds negative numbers then it returns how many negative numbers is there.

function findingBadData(array) {

}
