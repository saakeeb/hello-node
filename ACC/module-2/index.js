// Import Node.js core module
const http = require('http');
const url = require('url');
const fs = require('fs');
const events = require('events');
const Port = 5000;
const eventEmiter = new events.EventEmitter();

// creating the server
const server = http.createServer(function (req, res) {   
    //handle incomming requests here..
    // res.end('Hello Node JS');
    console.log('Path Name : ', req.url);

    //sending html response
    if (req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h2>Hello from home</h2>');
        res.end();
    }
    //sending json response
    else if (req.url === '/json') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ name: 'sakib', age: 25 }));
        // res.end();
    }

    //url module
    const address_url = 'http://localhost:5000/url?name=sakib&country=bangladesh';
    const parsed_url = url.parse(address_url, true);
    const query_url = parsed_url.query.name;
    console.log(query_url);

    //fs module
    if (req.url === '/asyncread') {
        //Async Data
        //read  file
        fs.readFile("home.html", (error, data) => {
            if (error) {
                console.log(error);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'File' });
            res.write(data);
            res.end();
        });
    }
    else if (req.url === '/syncread') {
        //Sync data
        const myData = fs.readFileSync('home.html');
        res.writeHead(200, { 'Content-Type': 'File' });
        res.write(myData);
        res.end();
    }
});
// listen for any incoming requests
server.listen(Port); 

// Events
//creating event handler
const firingEvent = () => {
    console.log('new event trigger from firing Events');
}

// assign handler to th event
eventEmiter.on('fire', firingEvent)

//firing th event
eventEmiter.emit('fire');

console.log(`Node.js web server at port ${Port} is running...`)