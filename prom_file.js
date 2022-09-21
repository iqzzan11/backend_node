const fs = require('fs');
const { resolve } = require('path');

function readFilePromiss(path){
    return new Promise((resolve,reject)=>{
        fs.readFile(path,'utf8',(err,data)=>{
            if (err)
                reject(err);
            else
                resolve(data);    
        });
    });
}

readFilePromiss('').then(val =>{
    console.log(val);
    return readFilePromiss('');
}).then(val =>{
    console.log(val);
    return readFilePromiss('');
}).then(val =>{
    console.log();
})