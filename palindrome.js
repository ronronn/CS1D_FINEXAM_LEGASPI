// Declare the words
let word1 = "RACECAR";
let word2 = "RECORDER";

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Check if the words are palindromes
function checkPalindrome(word) {
    let reversedWord = reverseString(word);
    console.log(Original String: ${word});
    console.log(Reversed String: ${reversedWord});
    console.log(Is Palindrome: ${word === reversedWord});
}

// Check both words
checkPalindrome(word1);
checkPalindrome(word2);
