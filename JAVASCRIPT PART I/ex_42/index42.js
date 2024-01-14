var message = "Ready Player One is a 2011 science fiction novel, \n and the debut novel of American author Ernest Cline. \n The story, set in a dystopian 2044, follows protagonist Wade Watts on \n his search for an Easter egg in a worldwide virtual reality \n game, the discovery of which will lead him to inherit the game creator's fortune. \n Cline sold the rights to publish the novel in June 2010, in a bidding \n war to the Crown Publishing Group (a division of Random House)]. \n The book was published on August 16, 2011. An audiobook was released the \n same day; it was narrated by Wil Wheaton, who was mentioned briefly in one of the chapters. \n Ch. 20 In 2012, the book received an Alex Award from the Young Adult \n Library Services Association division of the American Library Association \n and won the 2012 Prometheus Award. \n"
console.log(`Message text all in uppercase: `, message.toUpperCase())
console.log(`Message text all in lowercase: `, message.toLowerCase())

var message2 = "Ready Player One is a 2011 science fiction novel, and the debut novel of American author Ernest Cline. \n The story, set in a dystopian 2044, follows protagonist Wade Watts on his search for an Easter egg in a worldwide \n virtual reality game, the discovery of which will lead him to inherit the game creator's fortune. \n"
console.log(message2.toUpperCase())

var message3 = "Cline sold the rights to publish the novel in June 2010, in a bidding war to the Crown Publishing Group (a division of Random House)]. \n The book was published on August 16, 2011. An audiobook was released the same day; it was narrated by \n Wil Wheaton, who was mentioned briefly in one of the chapters. \n Ch. 20 In 2012, the book received an Alex Award from the Young Adult Library Services Association \n division of the American Library Association and won the 2012 Prometheus Award. \n"
console.log(message3.toLowerCase())

console.log(message.concat((message2.concat(message3))))
console.log(`Message Caracters Acount: `, message.length)
console.log(`Message2 Caracters Acount: `, message2.length)
console.log(`Message3 Caracters Acount: `, message3.length)