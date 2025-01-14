function foo(a, b, defaultValue = 0) {
  // Input validation: Check if inputs are numbers or can be converted to numbers
  a = isNaN(a) ? defaultValue : Number(a);
  b = isNaN(b) ? defaultValue : Number(b);

  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
console.log(foo(1, 'abc')); // 1
console.log(foo(1, '1')); //2 