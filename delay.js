-
function delayp(ms){
    return new Promise((resolve,reject)=>{
        try{
            setTimeout(()=>{
                resolve('성공');
            },ms);
        }catch(e){
            reject('실패');
        }
    });
}

delayp(1000).then(console.log).catch(console.log);

function delayp2(index,ms){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(index+'성공');
        },ms);
    });
}

delayp2(1,1000).then(value=>{
    console.log(value);
    return delayp2(2,1000);
}).then(value=>{
    console.log(value);
    return delayp2(3,1000);
}).then(value=>{
    console.log(value);
    return delayp2(4,1000);
});