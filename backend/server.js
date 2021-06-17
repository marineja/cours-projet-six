const http = require('http');

const server = http.createServer((req, res) => {
    res.end('voila la réponse du serveur de biere!');
});

server.listen(process.env.PORT || 3000);