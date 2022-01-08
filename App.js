const checkHeaders = require('./functions/CheckHeaders')
const config = require('./ci-config.json')

const cmdUrl = process.argv[2]

if (cmdUrl) {
    checkHeaders(cmdUrl)
} else {
    checkHeaders(config['app-url'])
}


//TODO - add error handling for DNS failure
//TODO - add error handling for no internet
//TODO - add return formatting for highlighting security issues