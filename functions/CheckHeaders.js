const checkMyHeaders = require('check-my-headers')

module.exports = function checkHeaders(url) {
    console.log('\n')
    console.log('Checking Security Headers returned from ' + url)
    console.log('\n')
    checkMyHeaders(url)
.then(({ messages, headers, status }) => {
    if (status != 200) {
        console.log('HTTP Error returned - check url formatting including http/https protocol i.e. "https://site.address.com"')
    } else {
        console.log('Successful connection established')
    }
    console.log(`Status code: ${status}`)
    console.log('\n')
    console.log(`Messages:`)
    console.log(messages)
    console.log("Current headers:")
    console.log(headers)
})
}

