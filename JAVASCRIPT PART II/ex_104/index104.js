// Defina uma variável Fibonacci e atribua um valor de função
// Ao executar a função fibonacci, ela imprimirá os 10 primeiros números de sequência de fibonacci como saída
//Execute esta função 3 vezes

var primeiroNumero = 0;
var segundoNumero = 1;
var resultado;
var contador = 0;

function fabercastel() {
    do {
        console.log(primeiroNumero);

        resultado = primeiroNumero + segundoNumero;
        primeiroNumero = segundoNumero;
        segundoNumero = resultado;

        contador++;
    } while (contador < 30);
}

fabercastel();
fabercastel();
fabercastel();