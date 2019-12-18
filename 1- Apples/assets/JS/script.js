appleNum = prompt("Please Enter the number of Apples:  ");
dozens = Math.floor(appleNum/12);
apples = appleNum % 12;
console.log(`${dozens} dozens and ${apples} apples`);