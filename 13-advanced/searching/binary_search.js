const numbers = [5, 7, 11, 15, 19, 27, 34, 39, 44, 45, 46, 51, 58, 59];

const binarySearch = (needle, haystack) => {
  let start = 0,
    end = haystack.length - 1;
  // Loop until there's nothing left to consider:
  while (start <= end) {
    let mid = Math.round(start + (end - start) / 2); // Thanks Tingy
    if (haystack[mid] > needle) {
      // Disregard the right hand side
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      // Disregard the left hand side
      start = mid + 1;
    } else {
      return true; // Found the needle
    }
  }

  return false; // No such needle in this haystack.
}

for (let i = 5; i < 100; i++) {
  let found = binarySearch(i, numbers);
  if (found) {
    console.log(i);
  }
}
console.log(numbers);
