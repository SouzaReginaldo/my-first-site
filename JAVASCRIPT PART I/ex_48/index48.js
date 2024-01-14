let message = "3.14 it's a great number but 42 it's the answer to life.";
let pi = parseFloat(message);
let answerToLife = message.substring(29,31);
    answerToLife = parseInt(answerToLife);

console.log(pi);
console.log(answerToLife);

let sumresult = pi + answerToLife;
console.log(`sumresult: `, sumresult);

// Show the following output: 45.14 is the result of adding pi and answerToLife

console.log(sumresult, `is the result of adding pi and answerToLife`);
    sumresult = sumresult.toString();