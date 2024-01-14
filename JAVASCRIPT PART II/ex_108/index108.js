function sortNumbers(number1, number2, number3, highToLow) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number' || typeof number3 !== 'number') {
        console.error('Erro: Todos os parâmetros devem ser números');
        return;
    }


const sortNumbers = [number1, number2, number3].sort(function (a, b) {
    return highToLow ? b - a : a - b;
  });
  
  console.log(sortNumbers.join(', '));
}

sortNumbers(10, 8, 25);
sortNumbers(10, 8, 25, true);