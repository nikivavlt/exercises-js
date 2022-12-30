/* 
The function fizzBuzz takes two integers and outputs a range of numbers from the first to the last number (inclusive).
If the number is divisible by 3 without a remainder, output to the console - "Fizz",
If the number is divisible by 5 without a remainder - "Buzz",
If the number is divisible by 3 and 5 without a remainder - "FizzBuzz",
In other cases output - the number itself. 
*/

const fizzBuzz = (firstNumber, lastNumber) => {
    for (let i = firstNumber; i <= lastNumber; i += 1) {
        const isFizz = (i % 3 === 0 ? 'Fizz' : '');
        const isBuzz = (i % 5 === 0 ? 'Buzz' : '');
        console.log(`${isFizz}${isBuzz}` || i);
    }
}

fizzBuzz(1,100);