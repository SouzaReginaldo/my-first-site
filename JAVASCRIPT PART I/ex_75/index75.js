var primeiroNumero = 0;
var segundoNumero = 1;
var resultado;
var contador = 0;

// Usa a estrutura while para mostrar os primeiros 10 números da sequência de Fibonacci

while (contador < 10) {
    console.log(primeiroNumero);

    resultado = primeiroNumero + segundoNumero;
    primeiroNumero = segundoNumero;
    segundoNumero = resultado;

    contador++;
}