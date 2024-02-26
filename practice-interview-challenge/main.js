'use strict';
function getRangeReport(start, end) {
  let total = 0;
  let evenNumbers = [];
  let oddNumbers = [];
  let range = [];
  for (let num = start; num <= end; num++) {
    total += num;
    range.push(num);
    if (num % 2 === 0) {
      oddNumbers.push(num);
    } else {
      evenNumbers.push(num);
    }
  }
  const average = total / (end - start + 1);
  const outcome = {
    total: total,
    oddNumbers: oddNumbers,
    evenNumbers: evenNumbers,
    range: range,
    average: average,
  };
  return outcome;
}
console.log(getRangeReport(22, 44));
