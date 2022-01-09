const checkMyHeaders = require('check-my-headers')

module.exports = function checkHeaders(url) {
    
    console.log('\n')
    console.log('Checking Security Headers returned from ' + url)
    console.log('\n')

    try {
    checkMyHeaders(url)
    .then(({ messages, headers, status }) => {
        if (status != 200) {
            console.log('HTTP Error returned - check url formatting including http/https protocol i.e. "https://site.address.com"')
            }
        //TODO DNS failure handling   
        // if (status = 500 | 503 | 504) {
        //     console.log("Application was found but Web server returned errors: ")
        //     console.log("HTTP Status code: " + status)
        //     return
        // }
        
        else {
       
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
            console.log("\n")   
            console.log(errors)
            console.log("\n")
            console.log("Consider removing fields marked as 'Remove' or 'Deprecated'\n")
            console.log("Ensure your applications are returning active security headers https://owasp.org/www-project-secure-headers/\n")
        }
        if (warns.length > 0) {        
            console.log("Medium Priority items to review: ") 
            console.log("\n")   
            console.log(warns)
            console.log("\n")
            console.log("Consider removing fields marked as 'Remove' or 'Deprecated'\n")
            console.log("Consider returning active security headers https://owasp.org/www-project-secure-headers/\n")
        }
        if (infos.length > 0) {        
            console.log("High Priority items to review: ") 
            console.log("\n")   
            console.log(infos)
            console.log("\n")
            console.log("Consider removing fields marked as 'Extra Field' as these may be additional information returned to malicious users whilst not providing application functionality\n")
            
        }
        } 
    
        })
    } catch (error) {
    console.log("Something went wrong")
    //console.error(error)
    }

    

    
    
}

