const path = reauire('path');

console.log(__dirnmae); //현재 프로그램 디렉토리
console.log(__filename); //현재 프로그램 파일 이름

const relpath = 'temp/textfile.txt';

const abspath = path.join(__dirnmae,tmp,'textfile.txt');
console.log(abspath);