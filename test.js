let numbersOne = [1, 2, 3];
let numbersTwo = [4, 5, 6];
let numbersThree = [7, 8, 9];
let numbersFour = [10, 11, 12];
let numbersCombined = [...numbersOne, ...numbersTwo];
let numbersPushed = [];
numbersPushed.push(numbersThree, numbersFour);

document.write(numbersCombined+"\n");
document.write(numbersPushed+"\n");

console.log("numbersCombined : " + numbersCombined);
console.log("numbersPushed : " + numbersPushed);

console.log(numbersCombined);
console.log(numbersPushed);
