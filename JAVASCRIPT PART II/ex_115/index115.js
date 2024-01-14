function getLongerText(text1, text2) {
    
    if (typeof text1 !== 'string' || typeof text2 !== 'string') {
        console.log("Por favor, forneça duas strings como parâmetros.");
        return;
    }

    var LongerText = text1.length >= text2.length ? text1 : text2;
    return LongerText;

}

const result1 = getLongerText('macarena', 'laranja');
console.log(`A palavra mais longa é: ${result1}`);

const result2 = getLongerText('beterraba', 'elefante');
console.log(`A palavra mais longa é: ${result2}`);

const result3 = getLongerText('olho', 'melancia');
console.log(`A palavra mais longa é: ${result3}`);

const result4 = getLongerText('peixe', 1234);
