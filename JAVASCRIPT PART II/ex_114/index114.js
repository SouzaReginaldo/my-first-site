function revert(text) {
    
    if (typeof text !== 'string') {
        console.log("Por favor, forneça uma string como parâmetro.");
        return;
    }

    const reversedText = text.split('').reverse().join('');
    console.log(reversedText);
}

revert('hello');
revert('world');
revert('javascript');
revert('example');
revert('programming');