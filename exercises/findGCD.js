// const findGCD = (firstNumber, secondNumber) => {
//     let first = firstNumber;
//     let second = secondNumber;
//     while (first !== 0 && second !== 0) {
//         (first > second)
//          ? first = first % second
//          : second = second % first;
//     }
//     return first + second;
// }

// Euclidean algorithm
const findGCD = (a, b) => (b === 0 ? Math.abs(a) : findGCD(b, a % b));

findGCD(25, 100);
