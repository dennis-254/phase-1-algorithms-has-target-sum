function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i = 0; i < array.length; i++){
    for (let j = i + 1; j < array.length; j++) {
      if(array[i] + array[j] == target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n*2) => runtime
  O(1) => space
*/

/* 
  Add your pseudocode here
  Take in an array
  loop through the array
  For each element check if there exists another in the array which when added equal target
  Return true if found and if no pair is found return false
*/

/*
  Add written explanation of your solution here
  Take in an array and check if there is pair in the
  array that adds up to a certain value.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4, 22, 32, 7, 1, 8], 12));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}
module.exports = hasTargetSum;