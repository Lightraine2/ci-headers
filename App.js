const checkHeaders = require('./functions/CheckHeaders')
const config = require('./ci-config.json')

const cmdUrl = process.argv[2]

if (cmdUrl) {
    checkHeaders.checkHeaders(cmdUrl)
} else {
    checkHeaders.checkHeaders(config['app-url'])
}
