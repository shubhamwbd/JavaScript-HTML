
function calculateAge(birthYear) {
    let currentYear = new Date().getFullYear();
    let age1 = currentYear - birthYear;
    let age2 = age1 - 1;
    console.log(`You are either ${age1} or ${age2}`);
  }
  
  
  calculateAge(1990);
  calculateAge(2001);
  calculateAge(1985);