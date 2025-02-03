const itemPrice = 40.99;
// You set it as a const because the price will never change

const salesTax = 0.07;
const discountRate = 0.10;
const discountThreshold = 50;
// The price stays the same 

const totalAfterTax = itemPrice * (1 + salesTax);
console.log("Total after tax", totalAfterTax);
// This gives the total of the price after tax, it will stay the same which is why I used const

const qualifiesforDiscount = itemPrice > discountThreshold;
// This boolean code lets us know if the discount qualifies or not 
console.log("Qualifies for Discount", qualifiesforDiscount);
// You do this to check for the item and if it qualifies for a discount 

const discountTotalAfterTax = itemPrice * (1 + salesTax) * (1 - discountRate);
console.log("Discounted total after tax", discountTotalAfterTax);
// Discounted total after taxation 
