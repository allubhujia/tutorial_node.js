/*const EventEmiiter = require('events');

const customEmiiter = new EventEmiiter()

customEmiiter.on('response', () => {
    console.log(`data recieved`);
})

customEmiiter.on('response', () => {
    console.log(`some other logic here`);
})


customEmiiter.emit('response')
*/

/*const { createReadStream } = require('fs');

const stream = createReadStream('./text.txt');

stream.on('data', (result) => {
    console.log(result);
})
*/

/*var http = require('http')
var fs = require('fs')

http.createServer(function (req, res){
    const fileStream = fs.createReadStream('./text.txt','utf8');
    fileStream.on('open',()=>{
        fileStream.pipe(res);
    })
    fileStream.on('error',(err)=>{
        res.end(err);
    })
})*/

