const checkHeaders = require('../functions/CheckHeaders')
const config = require('../ci-config.json')

const url = config['app-url']


//unit tests - check target site is defined
test('Check target site is defined', () => {
    expect(checkHeaders.checkInput(url)).toBe("URL Provided");
});

//check internet connectivity
test('Check target URL for successful HTTP response', () => {
    expect(checkHeaders.checkNetwork(url)).toBe(200);
});

// check some headers are returned
// test('Check headers are returned from target', () => {
//     expect(checkHeadersReturned(url)).todo();
// });   
    

//import the shit correctly