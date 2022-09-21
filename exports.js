const http = require('http');
const view = require('./helloview.js');

const server  = http.createServer((req,res)=>{
    const html = view.helloWorld();
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(html);
})

server.listen(3000); //localhost:3000