// write a program  for printing only even number
const number =Number(prompt("Enter the number 0 to n "));
console.log("even number up to",number);
let i=1;
do{if(i%2===0){
    console.log(i);}
    i++;
}
while(i<=number);