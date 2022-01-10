const checkHeaders = require('../functions/CheckHeaders')
const config = require('../ci-config.json')
const url = config['app-url']


//check target site is defined
test('Check target site is defined', () => {
    expect(checkHeaders.checkInput(url)).toBe("URL Provided");
});

//check internet connectivity
test('Check target URL for successful HTTP response', () => {
    return checkHeaders.checkNetwork(url).then(data => {
        expect(data).toBe(200)
    })    
});

// check some headers are returned
test('Check headers are returned from target', () => {
        return checkHeaders.checkHeadersReturned(url).then(data => {
        expect(data).toBe(!null);
    });
    
});   
    
