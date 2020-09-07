// Matrix Region Sum
// [
//   [1, 2, 3, 4, 5]
//   [6, 7, 8, 9, 10]
//   [3, 4, 5, 6, 11]
// ]
// find region sum of the rectangle
// ex - from [1,1] to [2,3]
//

//Approach 1 - Naive
// time - O(n*m)
function MatrixRegionSumNaive(matrix, A, D) {
  let sum = 0;
  for (let i = A[0]; i <= D[0]; i++) {
    for (let j = A[1]; j <= D[1]; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

//Approach 2, DP - optimization
// SUM(ABCD) = SUM(0, D) - SUM(0, C) - SUM(0, B) + SUM(0,A)
// Store the sum of intermidate rectangles and use that to calculate the sum of ABCD
