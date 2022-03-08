function calculator(valueA, valueB, operator){
  if(operator === 0) return valueA + valueB;
  if(operator === 1) return valueA - valueB;
  if(operator === 2) return valueA * valueB;
  if(operator === 3) return valueA / valueB;
}

module.exports = calculator;
