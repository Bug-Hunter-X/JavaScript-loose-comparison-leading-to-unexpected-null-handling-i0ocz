function foo(a, b) {
  if (a === null && b === null) {
    return null; //This line is changed
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: null
console.log(foo(0,2)); // Output 2
console.log(foo(false,2)); //Output 2
console.log(foo('',2)); //Output 2