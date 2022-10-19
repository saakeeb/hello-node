const http = require('http');
const url = require('url');

// const hostname = '127.0.0.1';
const port = 4000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    // // res.setHeader('Content-Type', 'saakib');
    // // res.setHeader('Content-Mobile', '01921652823');
    // res.writeHead(200, {
    //     'Content-Mobile': '01921652823',
    //     'Content-Documentation': 'SetHeader',
    //     'Content-Date': Date(),
    // });
    // res.end('Hello World');

    const ttlUrl = 'https://youtu.be/I2TNlHVJ9KQ?t=3568';
    const mainUrl = url.parse(ttlUrl, true);
    const host = mainUrl.host;
    const pathname = mainUrl.pathname;
    const search = mainUrl.search;

    if (req.url == '/') { 
        res.writeHead(200, { 'Page-Name': 'Home Page', 'Host': host, 'Path': pathname, 'search': search });
        res.write(`<h1>This is Home ${host}</h1>`);
        res.end();
    }
    else if (req.url == '/about') {
        res.writeHead(200, { 'Page-Name': 'About Page' });
        res.write('<h1>This is Aboute</h1>');
        res.end();
    }
    else if (req.url == '/contact') {
        res.writeHead(200, { 'Page-Name': 'Home Page' });
        res.write('<h1>This is Contact</h1>');
        res.end();
    }

    else if (req.url == '/checkout') {
        res.writeHead(200, { 'Page-Name': 'Checkout Page' });
        res.write('<h1>This is Checkout</h1>');
        res.end();
    }
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});