/* exported oddOrEven */
function oddOrEven(numbers: number[]): string[] {
  return numbers.map((number) => (number % 2 === 0 ? 'even' : 'odd'));
}
