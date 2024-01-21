// write a program  for multiplication table
const num = Number(prompt("Enter the number "));
console.log("multiplication table of ", num);
for (i = 1; i <= 10; i++) {
  let result = num * i;
  console.log(num, "*", i, "=", result);
}


