/*const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);

//info about the system
console.log(`System uptime is ${os.uptime()} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);
*/

/*const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./text.txt', 'utf8');
console.log(first);

writeFileSync(
    './text.txt', 
    `Here is the result ${first}`,
     'utf8'
);
*/

const { readFile, writeFile } = require('fs');
readFile('./text.txt', 'utf8', (err, first) => {
    if (err) {
        return console.error(err);
    }
    console.log('First read:', first);
    readFile('./text.txt', 'utf8', (err, second) => {
        if (err) {
            return console.error(err);
        }
        console.log('Second read:', second);
        writeFile('./text.txt', `Here is the result for the second time ${first}`, (err) => {
            if (err) {
                return console.error(err);
            }
            console.log('File written successfully!');
        });
    });
});
