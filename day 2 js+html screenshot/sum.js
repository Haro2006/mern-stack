let numbers = [10, 15, 22, 33, 40, 5, 8];
let evenNumbers = [];
let totalSum = 0;
for (let num of numbers) {
    totalSum += num;
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log("Numbers:", numbers);
console.log("Even numbers:", evenNumbers);
console.log("Sum:", totalSum);
