const userAndPassword = 'pepito2017,12345'
const username = userAndPassword.substr(0,10) //pepito2017
const password = userAndPassword.substr(11,16)

// Show the following output: The user %username% has %password% as password

message = `The user ${username} has ${password} as password`
console.log(message)