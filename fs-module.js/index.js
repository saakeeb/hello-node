const fs = require('fs');
const http = require("http");
const port = 4040;

const server = http.createServer((req, res) => {
    let myName = 'My Name is Sakib';

    if (req.url == '/asyncread') {
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
    else if (req.url == '/syncread') {
        //Sync data
        const myData = fs.readFileSync('home.html');
        res.writeHead(200, { 'Content-Type': 'File' });
        res.write(myData);
        res.end();
    }
    else if (req.url == '/write') {
        //write file
        fs.writeFile('demoWrite.html', myName, (error) => {
            if (error) {
                res.writeHead(200, { 'Content-Type': 'Write File' });
                res.write('File write unsuccessful');
                res.end();
            }
            else {
                res.writeHead(200, { 'Content-Type': 'Write File' });
                res.write('File write successful');
                res.end();
            }
        })
    }
    else if (req.url == '/writesync') {
        //write file
        let demoWriteSync = fs.writeFileSync('demoWriteSync.html', myName)
        if (demoWriteSync) {
            res.writeHead(200, { 'Content-Type': 'Write File Sync' });
            res.write('File write unsuccessful');
            res.end();
        }
        else {
            res.writeHead(200, { 'Content-Type': 'Write File Sync success' });
            res.write('File write successful');
            res.end();
        }
    }
    else if (req.url == '/rename') {
        fs.rename('demoRename.html', 'rename.html', (error) => {
            if (error) {
                res.writeHead(200, { "Content-Type": "Rename File unsuccessful" });
                res.write("File rename unsuccessful Async");
                res.end();
            }
            else {
                res.writeHead(200, { "Content-Type": "Rename File Success" });
                res.write("File rename successful Async");
                res.end();
            }
        })
    }
    else if (req.url == '/renamesync') {
        let rename = fs.renameSync('rename.html', 'demoRename.html')
        if (rename) {
            res.writeHead(200, { "Content-Type": "Rename File unsuccessful" });
            res.write("File rename unsuccessful Sync");
            res.end();
        }
        else {
            res.writeHead(200, { "Content-Type": "Rename File Success" });
            res.write("File rename successful Sync");
            res.end();
        }
    }
    else if (req.url == '/delete') {
        fs.unlink('deleteAsync.html', (error) => {
            if (error) {
                res.writeHead(200, { "Content-Type": "Delete File unsuccessful" });
                res.write("File Delete unsuccessful");
                res.end();
            }
            else {
                res.writeHead(200, { "Content-Type": "Delete File Success" });
                res.write("File Delete successful");
                res.end();
            }
        })
    }

    else if (req.url == '/deletesync') {
        const dlt = fs.unlinkSync('deleteSync.html')
        if (dlt) {
            res.writeHead(200, { "Content-Type": "Delete File unsuccessful sync" });
            res.write("File Delete unsuccessful sync");
            res.end();
        }
        else {
            res.writeHead(200, { "Content-Type": "Delete File Success sync" });
            res.write("File Delete successful sync");
            res.end();
        }
    }

    else if (req.url == '/exist') {
        fs.exists('deleteAsync.html', (r) => {
            if (r) {
                res.end("True");
            }
            else {
                res.end("False");
            }
        })
    }

    else if (req.url == '/existsync') {
        const check = fs.existsSync('deleteAsync.html')
        if (check) {
            res.end("True");
        }
        else {
            res.end("False");
        }
    }

})

server.listen(port, () => {
    console.log('The server is runing in port ' + port);
});