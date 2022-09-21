const fs = require('fs');
const http = require('http');
const url = require('url');
const qs = require('querystring');
const members = [{uid:'james',pwd:'123',name:'제임스'},{uid:'maria',pwd:'123',name:'마리아'}];
const server = http.createServer((req,res)=>{
    let patname = url.parse(req.url).pathname;
    let method = req.method;
    switch(patname){
        case '/input':
            if( method ==='GET'){
                fs.readFile('from.html','utf8',(err,html)=>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(html);
                });
            }else{
                let body = '';
                req.on('data',data=>{
                    body+=data;
                });
                req.on('end',()=>{
                    let param = qs.parse(body);
                    const uid = param.uid;
                    const pass =param.pass;
                    for(let member of members){
                        if(member.uid == uid && member.pwd == pass){
                            res.end(`<h1>${member.name}님 환영합니다</h1>`);
                        }
                    }
                    console.log(param);
                    console.log(param.uid,param.pass)
                    res.end(`<h1>Uid:${param.uid}, pwd:${param.pass}</h1>`);
                    //사용자가 입력한 데이터가 멤버에 있으면 이름 뜨면서 환영
                    //없으면 다시 입력하세요 출력 
                });

            }
            break;
        default:
            res.writeHead(400,{'Content-Type':'text/html'});
            res.end(); 
    }

});

server.listen(3000,()=>{
    console.log('Server');
});