"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discr = Math.pow(b, 2) - 4*a*c;
  if (discr === 0) {
    let root = -b/(2*a)
    arr.push(root);
  }

  else if (discr > 0) {
    let rootOne = (-b + Math.sqrt(discr) )/(2*a);
    let rootTwo = (-b - Math.sqrt(discr) )/(2*a);
    arr.push(rootOne, rootTwo);
  }
    
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) 
   return false;
  
  let monthPercent = (percent / 100) / 12;
  let credit = amount - contribution;
  let monthPayment = credit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  let payment = monthPayment * countMonths;
  if(payment != 0) {
    payment = parseFloat(payment.toFixed(2));  
}

return payment;
}