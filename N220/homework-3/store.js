const itemPrice = 40.99;
// You set it as a const because the price will never change
const salesTax = 0.07; 
// You set it as this because it is the sales tax 
const discountRate = 0.10; 
// You set it as the discount rate 
const discountAbility = 50; 
// You set it as this to signify the minimum price for the discount

console.log(itemPrice * (1 * salesTax)); 
// Use this to show the total price with tax on your webpage
console.log(itemPrice > discountAbility); 
// Use this to show up on your webpage and see if it is greater than 50$
console.log(itemPrice * (1 + salesTax) * (1 - discountRate));
// Use this to calculate the price with tax and discount

