function checkPalindrome(str) {
    let reversed = str.split("").reversed().join("");

    if(reversed === str) {
        return "Palindrome";
    } else {
        return "Not Palindrome";
    }
}

console.log(checkPalindrome("madam"));