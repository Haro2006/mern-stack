let inputString = "javascript";
let upperCaseStr = inputString.toUpperCase();
let reversedStr = upperCaseStr.split("").reverse().join("");
let vowelCount = 0;
let vowels = "AEIOU";
for (let char of upperCaseStr) {
    if (vowels.includes(char)) 
        {
        vowelCount++;
    }
}
console.log("Original string:", inputString);
console.log("Uppercase version:", upperCaseStr);
console.log("Reversed string:", reversedStr);
console.log("Number of vowels in the word:", vowelCount);
