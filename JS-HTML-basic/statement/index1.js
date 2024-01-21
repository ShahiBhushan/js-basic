///write a js progran that accept your name and show alert message saying "welcom admin"else say "welcome guest"
const userName=prompt("Enter Your Name");
if(userName==="bhushan"){
    alert("Welcome admin");
}
else{
    alert("Welcome guest");
}
    
// write a program that prints if its weekday or weekend on day input switch case
const  day=Number(prompt("Enter 1 to 7 number"));
switch(day){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert("its a weekday");
        break;
    case 7:
    case 1:
        alert("its a weekend");
        break;
      default:
        alert("Invalid day input, plz enter a number between 1 to 7")  ;
    
    
}
