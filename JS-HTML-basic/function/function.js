// write a function to find the area of spuare
function square(length){
    const result=length*length;
    return result;
}
const length=Number(prompt("enter the length"));
const area=square(length);
console.log("square of",length,"is",area);
//write a function to creat the full name of  of the person using parameter first name and last name
function hello(firstName,lastName){
const result=firstName.concat(' ',lastName);
return result;
}
const firstName=prompt("enter first name");
const lastName=prompt("enter last name");

const fullName=hello(firstName,lastName);
console.log("fullName is",fullName);