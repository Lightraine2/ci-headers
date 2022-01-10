const checkMyHeaders = require('check-my-headers')
const axios = require('axios')

function checkInput(url) {
    if (url) {
        return("URL Provided")
    } else
    return("No URL Provided")
}

async function checkNetwork(url) {
    const res = await axios
    .get(url)
    .then(res => res.status)
    .catch(err => console.error(err))
    return (res)
}

async function checkHeadersReturned(url) {
    const res = await axios
    .get(url)
    .then(res => res.headers)
    .catch(err => console.error(err)) 
    if (res) {
        return true
    }
  }

function checkHeaders(url) {
   
    console.log('\n')
    console.log('Checking Security Headers returned from ' + url)
    console.log('\n')

    checkMyHeaders(url)
    .then(({ messages, headers, status }) => {
      
       
        console.log('Successful connection established')
        console.log(`Status code: ${status}`)
        console.log('\n')

        console.log("Current headers returned from: " + url)
        console.log("\n")
        console.log(headers)
        console.log("\n")
        console.log("Items to review below: \n")

        const results = messages
        let errors = []
        let warns = []
        let infos = []

        results.forEach(msg => {
            if (msg.type === 'error') {
            errors.push(msg)
            }            
            if (msg.type === 'warn') {
            warns.push(msg)
            }            
            if (msg.type === 'info') {
            infos.push(msg)
            }            
        });

        if (errors.length > 0) {    
            console.log("High Priority items to review: ")    
            console.log(errors)
            console.log("Consider removing fields marked as 'Remove' or 'Deprecated'\n")
            console.log("Ensure your applications are returning active security headers marked as 'Missing Field' https://owasp.org/www-project-secure-headers/\n")
        }
        if (warns.length > 0) {        
            console.log("Medium Priority items to review: ") 
            console.log("\n")   
            console.log(warns)
            console.log("Consider removing fields marked as 'Remove' or 'Deprecated'\n")
            console.log("Consider returning active security headers marked as 'Missing Field' https://owasp.org/www-project-secure-headers/\n")
        }
        if (infos.length > 0) {        
            console.log("Lower Priority items to review: ") 
            console.log("\n")   
            console.log(infos)
            console.log("Consider removing fields marked as 'Extra Field' as these may be additional information returned to malicious users whilst not providing application functionality\n")
        }
        })
    
}

module.exports = {checkInput, checkNetwork, checkHeadersReturned, checkHeaders}

