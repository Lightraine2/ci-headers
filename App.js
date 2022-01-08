const checkHeaders = require('./functions/CheckHeaders')

const juiceShopUrl = "https://juice-shop.herokuapp.com/#/"
const userUrl = process.argv[2]

const config = require('./ci-config.json')

//Add check to make sure app has been run properly i.e. only one argument and it's correctly formatted url with http/https protocol specified

if (userUrl) {
    checkHeaders(userUrl)
} else {
    checkHeaders(config['app-url'])
}


//TODO - add error handling for DNS failure
//TODO - add error handling for no internet
//TODO - add return formatting for highlighting security issues