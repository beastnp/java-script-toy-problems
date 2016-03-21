JS Practice Questions & Answers:

1.	//Create a function called 'reversedLooper' that when passed an array will loop through it backwards and subtract 2 from the last element, 1 from the second to last, 0 from to the third to last, add one to the fourth to last, add 2 to the fifth to last, etc. until it reaches the front of the array.  Return the list when you are done

// Code Here

function reversedLooper(arr1) {
  for (var i = arr1.length - 1; i >= 0; i--) {
  arr1[i] -= (i - 2);
  }
  return arr1;
}

Seems to work, but got incorrect on CC

2.	//Create a function called myLoop that takes in two parameters, the first parameter should represent a number to be incremented and the second is how many times the number should be incremented. Use a forloop to increment the first parameter by one the number of times of the first parameter then return the changed number. For example if the first parameter is 3 and the second parameter is 4, the number three should be increased by one each time the forloop runs, and the for loop should run 4 times. This should return the number 7.

function myLoop(num, incr) {
  for (var i = 0; i < incr; i++) {
    num += 1;
  }
  return num;
}

3.  //Write a function called teamWin that will passed into the teamTrack function along with an object representing the winning team. in the teamWin function, increment the seahawk's wins property by one, and increment the eagles losses value by one.

function teamWin(team) {
 console.log(team);
 if (team === "Seahawks") {
    seahawks.wins++;
   eagles.losses++;
 } else {
     seahawks.losses++;
   eagles.wins++;
 }
}

4.  //Write a function called 'reverse' that takes is given str as it's only argument and returns that string after it's been reversed.

var reverse = function(str) {
    var str2 = "";
    for (var i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
};

5.  //For loops are especially useful when combined with arrays. Create an empty array called myArray, then create a function called arrayFiller that takes one parameter (the parameter will be a number). Then fill myArray with the string "item" the number of times indicated by the parameter. Return the filled array. For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] .

var arrayFiller = function(num) {
    var myArray = [];
    for (var i = 0; i < num; i++) {
        myArray[i] = "item";
    }
    return myArray;
};

6.  //Create a function called evenFinder that takes an array as an argument and returns an array with all of the odd numbers removed.

var evenFinder = function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) === 0) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

7.  //Write a function called 'findInArray' that takes in two parameters, the first representing the array to be searched and the second representing the value to be searched for. Return true if the value exists in the array. If it doesn't exist return false.

var findInArray = function(arr, val) {
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(val) !== -1) {
            return true;
        } else {
            return false;
        }
    }
};

8.  //Write a function called 'maker' that creates an array and fills that array with numbers 1 to 25, then returns the array.

function maker () {
    var arr = [];
    for (var i = 0; i < 25; i++) {
        arr[i] = (i + 1);
        arr.push(arr[i]);
    } 
    return arr;
}

9.  //Create a function called exponent that takes in two parameters, the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8.

function power(base, exponent) {
  if (exponent === undefined)
    exponent = 2;
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

10. //Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array). For each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.

function oddsAndEvens(nums) {
  for (var i = 0; i < nums.length; i++) {
    if ((nums[i] % 2) === 0) {
      evens.push(nums[i]);
    } else {
      odds.push(nums[i]);
    }
  }
}

11. //Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array. For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ].

function looper(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] += 5;
  }
  return arr;
}

12. //Check if a string (first argument) ends with the given target string (second argument).

function end(str, target) {
  
  var last = target.length;
  
  if (str.slice(-last) === target) {
    return true;
  } else {
    return false;
  }
}

//end("He has to give me a new name", "name") should return true ==> end("He has to give me a new name", "me") should return true

13. //Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWord(str) {
  
  var longest = 0;
  
  str.split(' ').forEach(function (word) {
    if (word.length >= longest) {
      longest = word.length;
    }
  });
  return longest;
}

or

function findLongestWord(str) {
  
  var longest = 0;
  
  str.split(' ').forEach(function (word) {
    longest = (word.length >= longest) ? word.length : longest;
  });
  return longest;
}

also look into array.reduce();

function findLongestWord(str) {
 return str.split(' ').reduce(function (longest, word) {
   return (longest >= word.length) ? longest : word.length;
 });
}

14. //Reverse the provided string. You may need to turn the string into an array before you can reverse it. Your result must be a string.

function reverseString(str) {
  
  var one = str.split('').reverse().join('');
  
  return one;
 
}

15.  //Return the factorial of the provided integer. If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n! For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  
  return num * factorial(num - 1);
}

//or

function factorial(num) {
 var newNum = 1;
 
 for (var i = 1; i <= num; i++) {
   newNum *= i;
 }
 return newNum;
}

16.  //Return true if the given string is a palindrome. Otherwise, return false. A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing. You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

function palindrome(str) {
  
  reverse = str.split('').reverse();
  for (var i = reverse.length - 1; i >= 0; i--) {
      if (reverse[i] === " ") {
          reverse.splice(i, 1);
      }
  }
  reverse = reverse.join('').toLowerCase();
  
  
  str = str.split('');
  for (var j = str.length - 1; j >= 0; j--) {
      if (str[j] === " ") {
          str.splice(j, 1);
      }
  }
  str = str.join('').toLowerCase();
  
 if (str === reverse) {
     return true;
 } else {
     return false;
 }
 
}

// or

function palindrome(str) {
  
  var reverse = str.split('').reverse().join('').toLowerCase().replace(/[^A-Z0-9]/ig, '');
  str = str.toLowerCase().replace(/[^A-Z0-9]/ig, '');
  
 if (str === reverse) {
    return true;
  } else {
    return false;
  }
 
}

17.  //Return the length of the longest word in the provided sentence. Your response should be a number.

function findLongestWord(str) {
  
  var longest = 0;
  
  str.split(' ').forEach(function (word) {
    longest = (word.length >= longest) ? word.length : longest;
  });
  return longest;
}

// or

function findLongestWord(str) {
  
  var longest = 0;
  
  str.split(' ').forEach(function (word) {
    if (word.length >= longest) {
        longest = word.length;
    }
  });
  return longest;
}


18. //Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

function titleCase(str) {
  
  var test = str.split(' ');
  
  var newArr = [];
  
  test.forEach(function(word) {
      lower = word.toLowerCase();
      newArr.push(lower.charAt(0).toUpperCase() + lower.substr(1, word.length -1));
  });
  return newArr.join(' ');
  
}

titleCase("I'm a little tea pot");

19. //Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); should return [5, 27, 39, 1001]

function largestOfFour(arr) {
  var results = [];
  for (var i = 0; i < arr.length; i++) {
    var largestNumber = 0;
    for (var j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
      }
    }

    results[i] = largestNumber;
  }

  return results;
}

//  second possible solution

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

20. //Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number. 
// repeat("abc", 3); should return "abcabcabc"

function repeat(str, num) {
  
  var word = [];
  
  for (i = 0; i < num; i++) {
    word[i] = str;
  }
  return word.join('');
}

21.  //We want to count from 1 to 20. But if the number is divisible by 3, we're going to print "Fizz". And if the number is divisible by 5 we're going to print "Buzz".  What will we print if the number is divisible by 3 AND 5? That's right! "FizzBuzz"!

    for (var i = 1; i < 21; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

22.  //Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending. Note that the three dots at the end add to the string length. If the num is less than or equal to 3, then the length of the three dots is not added to the string length.

function truncate(str, num) {
    
    if(str.length > num) {
        
        if(str.length < 3 || num < 3) {
            newStr = str.split('').slice(0, num).join('');
            return newStr + "...";
        } else {
        newStr = str.split('').slice(0, num - 3).join('');
        return newStr + "...";
        }
        
    } else {
        return str;
    }
}

23.  //Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array. ==> chunk([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].

function chunk(arr, size) {
    
    var num = arr.length/size;
    
    var newArr = [];
    
    for (var i = 0; i < num; i++) {
        newArr[i] = arr.splice(0, size);
    }
  
    return newArr;
}

24.  //Return the remaining elements of an array after chopping off n elements from the head. The head means the beginning of the array, or the zeroth index. ==> slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5) should return ["cheese", 4].

function slasher(arr, howMany) {
    
    return arr.slice(howMany, arr.length);
    
}

25.  //Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array. For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case. Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

function mutation(arr) {
    var answer = true;
    
    var zero = arr[0].toLowerCase();
    var one = arr[1].toLowerCase();
    var newArr = [zero, one];
    
    for (var i = 0; i < one.length; i++) {
        if(newArr[0].indexOf(one[i]) === -1) {
            answer = false;
        }
    }
    return answer;
}

26.  //