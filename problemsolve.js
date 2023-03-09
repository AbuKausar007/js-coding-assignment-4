// Problem 1: A function named mindGame is given. It takes positive number of arguments. If a number is given, then it will multiply the number by 3, addition by 10, division by 2, subtract by 5 and then return the result.

function mindGame(number) {
    if(typeof number !== 'number'){
        return "Please provide only number!!";
    }  
        const multiply = number * 3;
        const addition = multiply + 10;
        const division = addition / 2;
        const subtract = division - 5;
        return subtract;
}

const inputGiven = 5;
const result = mindGame(inputGiven);
console.log(result);


// Problem 2: A function called evenOdd, it takes string and calculate the total character in it. If the total number is odd then it returns odd and if even then returns even.

function evenOdd(string) {
    if (typeof string !== 'string') {
        return "Please input only string!!";
    } else if (string.length % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

const givenString = "Batch7";
const stringOutput = evenOdd(givenString);
console.log(stringOutput);


// Problem 3: A function called isLGSeven, it takes number as input. You have to differentiate between input and 7. If the difference is less than 7, return the subtraction otherwise return double of the input value.

function isLGSeven(num) {
    if (typeof num !== 'number') {
        return "Please enter only number!!";
    }  
    if (num - 7 < 7){
        return (num - 7);
    }
    else if(num - 7 >= 7){
        return num*2;
    }
}

const numInput = 6;
const numOutputIs = isLGSeven(numInput);
console.log(numOutputIs)


// Problem 4: A function named findingBadData, which takes array as input. Array may contain positive or negative numbers. If function finds negative numbers then it returns how many negative numbers is there.

function findingBadData(arr) {
    let badData = [];
    if (!Array.isArray(arr)) {
        return "Please enter array!!";
    }
    for(let i = 0; i <= arr.length; i++) {
        const element = arr[i];
        if(element < 0){
            badData.push(element);
            
        }
        
    }
    return badData.length;   
}
const inputArray = [1,2,3];
const outputArray = findingBadData(inputArray);
console.log(outputArray);


// Problem 5: A function named gemsToDiamond, which takes 3 input parameters. 1st parameter gems power is 21, 2nd gems power 32, 3rd gems power 43. 

function gemsToDiamond(num1,num2,num3){
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return "Please give number only!!";
    }
    const   gemNum1Produce = num1 * 21;
    const   gemNum2Produce = num2 * 32;
    const   gemNum3Produce = num3 * 43;
    const   diamondProduce = gemNum1Produce + gemNum2Produce + gemNum3Produce;
    if (diamondProduce >= 1000*2){
        const diamondWeWillGet = diamondProduce - 2000;
        return diamondWeWillGet;
    }
    else if(diamondProduce < 1000*2){
        return diamondProduce;
    }
}

const totalDiamond = gemsToDiamond(100,5,1);
console.log(totalDiamond);
