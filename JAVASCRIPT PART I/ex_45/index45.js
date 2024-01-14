let playerName = "Darian Durant is lame";
let teams = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
let message = "Regina is the best Canadian city, Go Riders";

// Use the slice method to get the following words or phrases from the previous variables:

console.log(playerName.slice(0,16)) // Daran Durant is
console.log(message.slice(37,43))  // riders
console.log(message.slice(10,18))  // the best
console.log(message.slice(32,37))  // , Go

firstpilot = playerName.slice(0,16).toLocaleUpperCase(); //DARIAN DURANT IS
thebest = message.slice(10,18);  // the best
riders = message.slice(37,43);  // riders
go = message.slice(32,37);  // , Go

// The final output must be: DARIAN DURANT is the best Riders player, Go Riders!!
let space = " ";
let exclam = "!!"

var result = firstpilot.concat (space.concat (thebest.concat (space.concat (riders.concat (go.concat (riders.concat (exclam.concat())))))))
console.log(result)