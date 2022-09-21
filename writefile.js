const fs = require('fs');

let buffer = '비동기적으로 파일 쓰기';

fs.writeFile('temp/async.txt',buffer,error =>{
    if(error)
        console.log(error);
});

buffer= '\n append모드로 동작합니다\n';

fs.writeFile('temp/async.txt',buffer,{flag:'a'},err =>{
    if(err)
        console.log(err);
});