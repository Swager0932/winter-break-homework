// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.

// #1
function solution(number){
    let count = 0
    let sum = 0
    while(count<number){
      count%3 === 0 || count%5 === 0 ? sum += count : false
      count++
    }
    return sum
}
  
  /*
  The function runs as follows:
    we declare a count variable and initialize it with the value of 0 
    we declare a sum variable and initialize it with the value of 0
    create a while loop that runs until it's counted up to the input number
      within the loop we us a ternary to check if a number is a multiple of 3 or 5
      if the number is a multiple of 3 or 5 we add it to the sum
      we iterate the working number towards the input number
    at the end of it all when the loop is finished we return the total sum 
  */



//# 2
function likes(names) {
    if(names.length === 0){return "no one likes this"}
    else if(names.length===1){return `${names[0]} likes this`}
    else if(names.length===2){return `${names[0]} and ${names[1]} like this`}
    else if(names.length===3){
        let last = names.pop()
        return `${names.join(', ')} and ${last} like this`
    }
    else{return `${names[0]}, ${names[1]} and ${names.length-2} others like this`}
}

/*


*/


//# 3 



//# 4




//# 5




//# 6




//# 7


// Bonus Questions I did because It started giving me random questions and I kept doing then unknowingly 😐😐😐

//Exhibit A
const arrayDiff = (a, b) => a.filter(char => !b.includes(char) ? char : false)

/*
The extended (and more readable) version of this is:

function arrayDiff(a, b) {
    let c = a.filter((char) =>{
        if(!b.includes(char)){
            return char
        }
    })
    return c
}

What this code does is creates a new array, `c` with the .filter method
  The rule within this filter method is to check if the current element is included within the `b` array
  If it is, it is filtered out.
and at the end we simply return the new array `c`
*/

// Note the only issue im having is that it omits any 0s within an array

//Edit: turns out the only issue was the fact that i added a Ternary... removing the `? char : false` solved it.


//Exhibit B
const disemvowel = (str) => str.replace(/[a||e||i||o||u]/gi, '')

/*
This line of code is returning a new string based off of this rule:
Using a combination of the `.replace` method & Reg-Ex, we look for any vowels existing within the string
Once we find a vowel, we replace it with an empty space, which is the equivalent of deleting it
And after doing all this it returns the string that is now stripped of all vowels
*/


//Exhibit C
function duplicateEncode(word){
    const obj = {}  
    let encrypt = ""
    word = word.toLowerCase().split('')
    for(char of word){
        if(char in obj){obj[char] ++}
      else{obj[char] = 1}
    }
    for(val of word){obj[val] === 1 ? encrypt += "(" : encrypt += ")"}
    return encrypt
  }

/*This code is supposed to take in a string argument and encrypt the string based on this rule:
  If the character is a non-repeating character, replace it with a '('.
  If the character is a repeating character, replace it with a ')'.
I got lazy knowing that this isn't a part of my assignment so I wont be explaining this code.
  */