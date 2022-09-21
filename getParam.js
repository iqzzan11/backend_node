const fs = require('fs');
const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req,res)=>{
    let query = url.parse(req,url,true).query;
    res.end(JSON.stringify(query));
}).listen(3000,()=>{
    console.log('Server');
});