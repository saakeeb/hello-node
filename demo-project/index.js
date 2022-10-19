const fs = require('fs');
const http = require('http');
let port = 4040;

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        let data = fs.readFileSync('home.html', 'utf8');
        res.end(data);
    }
    else if (req.url == '/contact') {
        let data = fs.readFileSync('contact.html', 'utf8');
        res.end(data);
    }
    else if (req.url == '/blog') {
        let data = fs.readFileSync('blog.html', 'utf8');
        res.end(data);
    }
    else if (req.url == '/about') {
        let data = fs.readFileSync('about.html', 'utf8');
        res.end(data);
    }
})

server.listen(port, () => {
    console.log(`The server is running on port ${port}`);
})