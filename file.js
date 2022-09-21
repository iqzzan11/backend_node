const http = require('http');
const fs = require('fs');
const { html } = require('cheerio');

const server = http.createServer((req,res)=>{
    fs.readFile('tmp.html','utf8',(err,html)=>{
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(html);
    })
})

server.listen(3000);