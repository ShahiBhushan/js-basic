//statement
// if & else
//js program to find you are adult  or not
const year = Number(prompt("What is your birth year?"));
console.log(year);
const age = 2024 - year;
// if (age > 18) {
//   alert("You are adult");
// } else {
//   alert("You are child");
// }
//switch case

switch (age>18) {
  case true:
    alert("you are young");
    break;
  case false:
    alert("you are child");
    break;
  default:
    alert("invalid");
}
