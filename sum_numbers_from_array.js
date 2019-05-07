/*
* Problem Statement:
* Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
* For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
*/


/*This is the first approach and simplest method to resolve issue: Brute force method*/
function sumOfTwoNumbersInArray (inputArray, sumValue) {
  var isSumOfTwoNumbers = false;
  for(var i=0; i < inputArray.length; i++){
    if(inputArray[i] < sumValue){
      let searchVal = sumValue - inputArray[i];
      isSumOfTwoNumbers = inputArray.find(function(element) {
        return element === searchVal;
      });
    }
  }
  return isSumOfTwoNumbers;
}
