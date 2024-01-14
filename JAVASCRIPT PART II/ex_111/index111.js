function isEven(number) {
    return number % 2 === 0;
}

const numbersToCheck = [2, 5, 3, 24, 12];

numbersToCheck.forEach(number => {
    if (isEven(number)) {
        console.log(`${number} is even`);
    } else {
        console.log(`${number} is odd`);
    }
});