//Define the average function that accepts 5 numbers as parameter
//Call the average function with the following values: 2, 4, 10, 20, 30
//After executing the call show the following message: The average is %average%

function average(num1, num2, num3, num4, num5) {
    let total = num1 + num2 + num3 + num4 + num5;
    let avg = total / 5;
    return avg;
}

let result = average (2, 4, 10, 20, 30);
console.log(`The average is ${result}`);