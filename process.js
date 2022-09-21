process.on('exit',code=>{
    console.log('프로그램종료');
    console.log('exit code:',code);
})

process.on('uncaughException',error=>{
    console.log('예외 발생');
    console.log('매개변수:',error);
})