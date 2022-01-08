const checkMyHeaders = require('check-my-headers')

module.exports = function checkHeaders(url) {
    checkMyHeaders(url)
.then(({ messages, headers, status }) => {
    console.log(`Status code: ${status}`)
    console.log(`Messages:`)
    console.log(messages)
    console.log("Current headers:")
    console.log(headers)
})
}

