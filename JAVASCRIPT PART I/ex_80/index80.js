var numero = 1;
var somaParcial = 0;

do {
    somaParcial += numero;
    console.log("Número impar: " + numero + " Soma Parcial: " + somaParcial);
    numero+=2;
} while (numero <= 1000)