const fs = require('fs');

// fs.readdir('temp',(err,data)=>{
//     console.log(data);
// });

// fs.stat('temp/a.txt',(err,stats)=>{
//     console.log(stats.mtime); //최종 수정시간
//     console.log(stats.size); //파일의 크기
// });

//디렉토리에 있는 파일에 대하여 최종 수정시간,파일의 크기,파일의 이름 표시
fs.readdir('temp',(err,data)=>{
   for (let file of data){
        fs.stat('temp/'+file,(err,stats)=>{
            console.log(stats.mtime); //최종 수정시간
            console.log(stats.size); //파일의 크기
        });
   }
})
//삭제
fs.unlink('temp/single.txt',err =>{
    if(err)
        console.log(err);
});

//이름수정
fs.rename('temp/single.txt','temp/싱슬.txt',err=>{
    if(err)
        console.log(err);
});