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
//subtraction
function sub(a,b){
  const result=a-b;
  return result;
}
const resp=sub(12,10);
const resp1=sub(15,11);
const resp2=sub(120,12);
const resp3=sub(11,2);
console.log(resp,resp1,resp2,resp3);