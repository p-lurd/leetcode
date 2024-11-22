// This is easier to understand
var isZeroArray = function (nums, queries) {
  for (const query of queries) {
    const [start, end] = query;
    for (let i = start; i <= end; i++) {
      nums[i] -= 1;
      if (nums[i] < 0) {
        nums[i] = 0;
      }
    }

    if (!nums.every((num) => num === 0)) {
      return false;
    }
  }

  return true;
};

// For a more optimised version

var isZeroArray = function (nums, queries) {
  const n = nums.length;
  const diff = Array(n + 1).fill(0);
  for (const [start, end] of queries) {
    diff[start] -= 1;
    if (end + 1 < n) {
      diff[end + 1] += 1;
    }
  }
  let curr = 0;
  for (let i = 0; i < n; i++) {
    curr += diff[i];
    nums[i] += curr;
  }

  return nums.every((num) => num < 1);
};

// {
// Explanation
// Difference Array:

// We maintain a diff array to track increments/decrements at specific indices.
// For each query [start,end], decrement the start index and increment the index after the end (end+1).
// Lazy Updates:
// Instead of directly modifying the array during each query, the diff array accumulates changes.
// This makes range updates O(1), reducing the time complexity significantly.
// Final Check:
// After applying all updates, we iterate through nums to compute the final values and validate them in a single pass.
// Complexity Analysis
// Time Complexity:

// Applying all range updates: O(q), where
// q is the number of queries.
// Calculating the final array and validating:O(n), where
// 𝑛
// n is the size of nums.
// Total: O(n+q).
// Space Complexity:
// Difference array:O(n).
// Total: O(n).
// }
