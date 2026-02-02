/*const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page');
    } else {
        res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `);
    }
});

server.listen(5000, () => {
    console.log('Server is listening on port 5000...');
});
*/
const _ = require('loadsh');

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);