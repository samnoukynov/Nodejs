const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    console.log(request.url);

    http.get(`http://google.fr/search?q=${request.url.substr(1)}`, res =>{
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', chunk =>{
            rawData += chunk;
        })
        res.on('end', () => {
            console.log('getData : ', rawData)
            response.end(rawData);
        })
    })
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});