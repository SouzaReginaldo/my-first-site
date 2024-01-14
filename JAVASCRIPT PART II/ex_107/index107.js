function biggerNumber(firstNumber, secondNumber) {
    if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
        console.error('Erro: Um dos parâmetros informados não sao números');
        return;
} if (firstNumber > secondNumber) {
    console.log(`O número ${firstNumber} é maior que ${secondNumber}`);
} else if (firstNumber < secondNumber) {
    console.log(`O número ${secondNumber} é maior que ${firstNumber}`);
} else {
    console.log(`Os números sao iguais`);
}
}

biggerNumber(3, 5);
biggerNumber(6, 3);
biggerNumber(2, 2);