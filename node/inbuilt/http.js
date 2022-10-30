let http = require('http');

//req > what we will send to the server(params,queryParams,body)
//res > what we will get from server back

let server = http.createServer((req,res) => {
    res.write('<h1>Hii from NodeJs Server</h1>');
    res.end()
})

server.listen(6790)