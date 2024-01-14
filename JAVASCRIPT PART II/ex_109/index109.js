function validateUser(username, password) {
    const users = [
        { username: 'nacho', password: 'Nerd1979' },
        { username: 'pedro', password: 'Batman0217' },
        { username: 'marta', password: 'Mother2312' }
    ];

    for (const user of users) {
        if (user.username === username && user.password === password) {
            return `Welcome ${username}, nice to see you again`;
        }
    }

    return 'Please input valid credentials';
}

// Testing with valid credentials
console.log(validateUser('nacho', 'Nerd1979'));  // Should output: Welcome nacho, nice to see you again

// Testing with invalid credentials
console.log(validateUser('john', 'Doe123'));  // Should output: Please input valid credentials
