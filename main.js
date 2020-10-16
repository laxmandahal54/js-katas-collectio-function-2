console.log("hi");
function add(a, b) {
  return a + b;
}
console.log(add(2, 4));

function multiply(a, b) {
  let c = 0;
  let counter = 1;

  while (counter <= b) {
    console.log("mult");
    c = add(c, a);
    counter += 1;
  }

  return c;
}
console.log(multiply(6, 4));

function power(x, n) {
  let d = 1;
  let counter = 1;
  while (counter <= n) {
    d = multiply(d, x);
    counter += 1;
  }
  return d;
}
console.log(power(2, 8));

console.log(power(3, 4));

function factorial(a) {
  let e = 1;
  let counter = 0;
  while (counter < a) {
    e = multiply(e, 5 - counter);
    counter += 1;
  }
  return e;
}
console.log(factorial(5));

function