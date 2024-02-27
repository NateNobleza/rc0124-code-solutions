function getRangeReport(start: number, end: number): any {
  let total: number = 0;
  const evenNumbers: number[] = [];
  const oddNumbers: number[] = [];
  const range: number[] = [];
  for (let num = start; num <= end; num++) {
    total += num;
    range.push(num);
    if (num % 2 === 0) {
      oddNumbers.push(num);
    } else {
      evenNumbers.push(num);
    }
  }
  const average: number = total / (end - start + 1);
  const outcome = {
    total,
    oddNumbers,
    evenNumbers,
    range,
    average,
  };
  return outcome;
}
console.log(getRangeReport(22, 44));
