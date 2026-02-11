const http = require('http');

const server = http.createServer((req, res) => {
    console.log('user is listening')
    res.end("Home page")

})

server.listen(5000)

