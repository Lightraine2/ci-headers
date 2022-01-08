const checkHeaders = require('./functions/CheckHeaders')

const juiceShopUrl = "https://juice-shop.herokuapp.com/#/"
const userUrl = process.argv[2]

//Add check to make sure app has been run properly i.e. only one argument and it's correctly formatted url with http/https protocol specified

console.log(userUrl)
 
checkHeaders(userUrl)



