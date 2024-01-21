//ES5
//define function
function sayHi(name) {
  console.log("Yes sir", name);
}
//run function
sayHi("bhushan");
//check Even
function checkEven(number) {
  const result = number % 2;
  if (result === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
const number = Number(prompt("enter a number"));
checkEven(number);
// add function
function add(a, b, c) {
  console.log(a + b + c);
}
add(20, 10, 1);
