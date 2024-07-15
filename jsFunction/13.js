function find_Factors(num) {
    let factors = [];
   
    for (let i = 1; i <= num / 2; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
  
    
    factors.push(num);
  
    return factors;
  }
  console.log(find_Factors(15));  
  console.log(find_Factors(16));  
  console.log(find_Factors(17));  
  