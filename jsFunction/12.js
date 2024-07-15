function isPerfectNumber(number) {
    if (number <= 0) {
        return false; }

    let sum = 1;

    
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            sum += i;
            
            if (i !== number / i) {
                sum += number / i;
            }
        }
    }

    
    return sum === number;
}


console.log(isPerfectNumber(28)); // Output: true (28 is a perfect number)
console.log(isPerfectNumber(6));  // Output: true (6 is a perfect number)
console.log(isPerfectNumber(12)); // Output: false (12 is not a perfect number)
