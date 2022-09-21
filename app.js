const http = require('http');
const fs = require('fs');
const url = require('url');
const qs = require('querystring');
const view = require('./index');

http.createServer((req,res)=>{
    let pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            const html = view.index();
            res.end(html);
            break;
        default:
            res.writeHead(404,{'Content-Type':'text/html'});
            res.end();    
    }
}).listen(3000,()=>{
    console.log('Server');
});