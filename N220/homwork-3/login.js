const Password = "(d0nteatTheScript)";
// You use const because the password does not need to be changed

const passwordstartsWithSpace = Password.startsWith(" ");   
console.log("Start with space", passwordstartsWithSpace);

const atleast8CharactersLong = Password.length >= 8;
// You use this boolean code because it allows the use to know if the password length is true or false 
console.log("At least 8 characters long", atleast8CharactersLong)

const containsEat = Password.includes("!eat");
console.log("Contains eat", containsEat);