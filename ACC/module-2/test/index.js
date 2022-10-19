// Import Node.js core module
const http = require('http');
const fs = require('fs');
const read_stream = fs.createReadStream('first.txt');
const Port = 5000;

let first_text;
let append_text = ' No! It will be full not pull ! 😑';
read_stream.on('data', (chunk) => {
    // console.log('Reading chunk...');
    // console.log(chunk);
    first_text = chunk.toString();
})

// creating the server
const server = http.createServer(function (req, res) {
    //handle incomming requests here..
    // res.end('Welcome to Full Stack Development');
    console.log('Path Name : ', req.url);
    if (req.url === '/read') {
        fs.readFile('./first.txt', (error, data)=> {
            if (error) {
                console.log(error);
                return;
            } else {
                res.writeHead(200, { 'Content-Type': 'file' });
                res.write(data);
                res.end();
            }
        })
    }
    else if (req.url === '/write') {
        fs.writeFile('./second.txt', first_text, (error)=> {
            if (error) {
                console.log(error);
                return;
            } else {
                res.writeHead(200, { 'Content-Type': 'file' });
                res.write(first_text);
                res.end();
            }
        })
    }
    else if (req.url === '/append') {
        fs.appendFile('./second.txt', append_text, (error)=> {
            if (error) {
                console.log(error);
                return;
            } else {
                // res.writeHead(200, { 'Content-Type': 'file' });
                // res.write(append_text);
                // res.end();
                fs.readFile('./second.txt', "utf8", (error, data) => {
                    if (error) {
                        console.log(error);
                        return;
                    } else {
                        res.writeHead(200, { 'Content-Type': 'file' });
                        res.write(data);
                        res.end();
                    }
                });
            }
        })
    }

    else if (req.url === '/delete') {
        fs.unlink('./second.txt', (error) => {
            if (error) {
                console.log(error);
                return;
            } else {
                console.log('File deleted');
            }
        })
    }
    // console.log('first_text', first_text.toString());
});
// listen for any incoming requests
server.listen(Port); 

console.log(`Node.js web server at port ${Port} is running...`)