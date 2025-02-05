const radius = 5 
// You use const because it will keep the radius of the circle the same 

let area = 0; 
// You are trying to find the area so it starts at 0, this can be changed 
let perimeter = 0;
// You are trying to fidn the perimeter so it starts at 0, this can be changed

area = Math.PI * Math.pow(radius, 2);
// You calculate the area by using the formula provided 
perimeter = 2 * Math.PI * radius; 
// You do the same as you did, using the formula for perimeter

console.log("Area of Circle", area);
console.log("Perimeter of Circle", perimeter);
// You log it so that it shows up on your webpage
