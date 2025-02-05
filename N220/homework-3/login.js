const password = "d0nteatTheScript";
// You set the password as const because it will not be changed 
const passwordstartsWithSpace = " "
// You do this to make the variable so that it is representing " "
const atleast8Chars = 8; 
// You do this so that the variable is equal to 8 chars 
const containsEat = "eat";
// You do this to see if the password contains eat 

console.log(password.startsWith(passwordstartsWithSpace));
// You check if the password starts with " ", using string 
console.log(passwordstartsWithSpace >= atleast8Chars);
// You use boolean to see if the password is greater or equal to 8 chars 
console.log(password.includes(containsEat));
// You use string to see if the password includes the word "eat"