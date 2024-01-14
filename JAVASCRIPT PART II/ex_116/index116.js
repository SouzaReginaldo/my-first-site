function getHexaColor(color) {
    const lowerCaseColor = color.toLowerCase();

    const colorMap = {
        branco: '#FFFFFF',
        preto: '#000000',
        azul: '#0b24fb',
        verde: '#0e7e12',
        amarelo: '#fffd38',
        rosa: '#fec1cc'
    };

       if (colorMap.hasOwnProperty(lowerCaseColor)) {
        return colorMap[lowerCaseColor];
    } else {
        return "Cor não reconhecida. Por favor, forneça uma cor válida.";
    }
}

console.log(getHexaColor('branco')); 
console.log(getHexaColor('preto'));  
console.log(getHexaColor('azul'));
console.log(getHexaColor('verde'));   
console.log(getHexaColor('amarelo')); 
console.log(getHexaColor('rosa'));    
