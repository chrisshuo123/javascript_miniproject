const express = require('express');
const { request } = require('http');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static(__dirname));

// Handle ALL routes - serve the corresponding HTML file
app.get('*', (req, res) => {
    const requestedPath = req.path;

    // List semua file HTML yang ada
    const htmlFiles = [
        '/index.html',
        '/contact.html',
        '/products/electronics.html',
        '/products/clothing/mens.html',
        '/products/clothing/womens.html',
        '/products/clothing/kids.html',
        '/products/furniture.html',
        '/services/consulting.html',
        '/services/training/webdevelopment.html',
        '/services/training/datascience.html',
        '/services/training/cloudcomputing.html',
        '/services/support.html'
    ];

    // Cek jika path langsung menuju file HTML yang ada
    if(htmlFiles.includes(requestedPath)) {
        return res.sendFile(path.join(__dirname, requestedPath));
    }

    // Handle routes dengan atau tanpa .html extension
    if(requestedPath.endsWith('.html') || !path.extname(requestedPath)) {
        let filePath;

        // Coba beberapa kemungkinan path
        const possiblePaths = [
            requestedPath,
            requestedPath + '.html',
            requestedPath + '/index.html',
            requestedPath.replace(/\.html$/, '') + '.html'
        ];

        // Cari file yang benar-benar ada
        for (const possiblePath of possiblePaths) {
            const fullPath = path.join(__dirname, possiblePath);
            if(require('fs').existsSync(fullPath)) {
                filePath = fullPath;
                break;
            }
        }

        if(filePath) {
            return res.sendFile(filePath);
        }
    }

    // Jika file tidak ditemukan, serve index.html untuk SPA fallback
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Available routes: ');
    console.log('- Home: http://localhost:3000/');
    console.log('- Contact: http://localhost:3000/contact.html');
    console.log('- Electronics: http://localhost:3000/products/electronics.html');
    console.log('- Mens Clothing: http://localhost:3000/products/clothing/mens.html');
    console.log('- Web Development: http://localhost:3000/services/training/webdevelopment.html');
});