const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url);
    let pathname = parsedUrl.pathname;
    
    // Set default file to index.html
    if (pathname === '/') {
        pathname = '/index.html';
    }
    
    // Get file extension
    const ext = path.extname(pathname);
    
    // Map extensions to content types
    const contentTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'image/png',
        '.jpg': 'image/jpeg'
    };
    
    // Read file
    const filePath = path.join(__dirname, pathname);
    
    fs.readFile(filePath, (err, data) => {
    if (err) {
        // If file not found, serve index.html for SPA routing
        if (err.code === 'ENOENT') {
            fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
            });
        } else {
            res.writeHead(500);
            res.end('Server Error');
        }
        } else {
        res.writeHead(200, { 'Content-Type': contentTypes[ext] || 'text/plain' });
        res.end(data);
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Press Ctrl+C to stop server');
});