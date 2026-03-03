function checkAnagram(str1, str2) {
    let word1 = str1.split("").sort().join("");
    let word2 = str2.split("").sort().join("");

    if(word1 === word2) {
        return "Anagram";
    } else {
        return "Not Anagram";
    }
}

console.log(checkAnagram("listen", "silent"));