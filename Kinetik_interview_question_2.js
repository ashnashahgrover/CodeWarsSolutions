// Given two strings ‘X’ and ‘Y’, find the length of the longest common substring.
// Examples :
//
// Input : X = “GeeksforGeeks”, y = “GeeksQuiz”
// Output : 5
// The longest common substring is “Geeks” and is of length 5.
//
// Input : X = “abcdxyz”, y = “xyzabcd”
// Output : 4
// The longest common substring is “abcd” and is of length 4.
//
// Input : X = “zxabcdezy”, y = “yzabcdezx”
// Output : 6
// The longest common substring is “abcdez” and is of length 6.

//TO SOLVE LATER

function inCommon(arr1, arr2){
  common = arr1.filter(e=>arr2.includes(e))
  return common
}

function longestSubstring(string1, string2){

  let shorterString = (string2.length<string1.length) ? string2 : string1
  let longerString = (string2.length>string1.length) ? string2 : string1

  //O(n)
  for (let i=shorterString.length; i>0; i--) {
    let longerStringSubStrings = []
    let shorterStringSubStrings = []

    //(O(n))
    for (let n=0; n<=shorterString.length-i; n++){
      //this loop returns substrings for the shorterString string for each designated substring length
      substring = shorterString.slice(n, n+i)
      shorterStringSubStrings.push(substring)
    }

    //(O(m))
    for (let m=0; m<=longerString.length-i; m++){
      //this loop returns substrings for the longer string for each designated substring length
      substring = longerString.slice(m, m+i)
      longerStringSubStrings.push(substring)
    }

    //O(n*m)
    let commonSubStrings = inCommon(shorterStringSubStrings, longerStringSubStrings)
    if (commonSubStrings.length>0){return commonSubStrings[0]}
    //overall timecomplexity: O(n^2 * m)
  }
  return "No Common SubStrings"
}

function longest_common_starting_substring(str1, str2){
  const shorterLength= str1.length;
  let i= 0;
  let longestSubstring
  let previousSubstring = ""
  let currentSubstring
    while (i < shorterLength){
      while(a1.charAt(i)=== a2.charAt(i)){
        currentSubstring=a1.substring(0, i);
        i++
      }
      if (currentSubstring.length>previousSubstring.length){
        longestSubstring=currentSubstring
        previousSubstring=currentSubstring
      }
      debugger
    }

}

// trying an alternative approach - its going nowhere
