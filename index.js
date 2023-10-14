function isPalindrome(word) {
  // Write your algorithm here
  for (i = 0; i < word.length / 2 ; i ++){
    const j = word.length -1 - i;
    let firstLetter = word[i]
    let secondLetter = word[j]
    if(word[i] !== word[j]){
      return  false
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  itereate on the word if first letter equal last letter , and second letter equa second last letter return true ,
   other wise return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
console.log(isPalindrome("abssaba"))