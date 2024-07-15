
function calculateSupply(age, amountPerDay) {
    const maxAge = 100;
    const yearsLeft = maxAge - age;
    const totalAmount = yearsLeft * 365 * amountPerDay;
    const roundedAmount = Math.ceil(totalAmount);
    console.log(`You will need ${roundedAmount} to last you until the ripe old age of ${maxAge}`);
  }
  
  
  calculateSupply(25, 2);
  calculateSupply(30, 1.5);
  calculateSupply(40, 3);