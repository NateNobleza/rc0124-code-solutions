/* exported countdown */
function countdown(number: number): number[] {
    const result: number[] = [];
    for (let i = number; i >= 0; i--) {
        result.push(i);
    }
    return result;
}
