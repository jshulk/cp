// Find all the pairs in the numbers array which add upto K
function PairSum(arr, k) {}

// Approach 1
// for each element loop over the array and check if sum equals to k
// if sum equals add to the  output
// time - O(n^2)
function isDuplicate(map, values) {
  if (map[values.sort().join("-")]) return true;
  else return false;
}
function PairSumForEach(arr, k) {
  let output = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        //check if pair equals k
        if (arr[i] + arr[j] === k && !isDuplicate(map, [arr[i], arr[j]])) {
          output.push([arr[i], arr[j]]);
          map[[arr[i], arr[j]].sort().join("-")] = true;
        }
        //remove duplicates
        // maintain a map, sort the pair and join as string and store it in map
        // before adding check for duplicates
      }
    }
  }

  return output;
}

// Approach 2
// sort the array
// start two pointers, one from left and other from right
// case 1; arr[start]+arr[right] === k, add(start, right);
// case 2: arr[start]+arr[right] < k, start++;
// case 3: arr[start]+arr[right] > k, right--;
// time - O(nlogn) sorting + searching

function PairSumWithSorting(arr, k) {
  let output = [];
  arr.sort();
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let sum = arr[start] + arr[end];
    if (sum === k) {
      output.push([arr[start], arr[end]]);
      start++;
      end--;
    } else if (sum < k) {
      start++;
    } else if (sum > k) {
      end--;
    }
  }
  return output;
}

//Approach 3
// Maintain a map of seen elements
// for every element check the seen elements and see if map[key]+element = k
// if the sum equals  to k, add the pair to output
// time  - O(n)
function PairSumWithSeen(arr, k) {
  let output = [];
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (map[item]) {
      output.push([item, map[item]]);
    } else {
      map[k - item] = item;
    }
  }
  return output;
}
