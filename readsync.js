const fs = require('fs');

fs.readFile('temp/textfile.txt','utf8',(err,data)=>{
    if (err){
        console.log(err);
    }

    console.log('파일에서 읽은 데이터:',data);
});

// let bufa = fs.readFileSync('temp/textfile.txt','utf8');