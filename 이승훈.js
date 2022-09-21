//Q1
function ans1(num1,num2){
    const min = Math.min(num1,num2);
    const max = Math.max(num1,num2);
    const list = [];

    for(let i = min;i<=max;i+=3){
        list.push(i);
    }

    return list;
}

console.log(ans1(2,10));
console.log(ans1(12,3));

//Q2
function ans2(birthday){
    const age = birthday;
    if(age.length != 6){
        console.log('생년월일 6자리를 입력해주세요.');
        return false;
    }

    const in_year = age.substr(0,2) == '00' ? parseInt('20'+age.substr(0,2)):parseInt('19'+age.substr(0,2));
    const in_month = parseInt(age.substr(2,5));
    // console.log(in_year);
    // console.log(in_month);

    const date = new Date();
    const year = date.getFullYear();
    // console.log(year);
    const month = ('0'+ (date.getMonth() + 1)).slice(-2).toString();
    const day = ('0' + date.getDate()).slice(-2).toString();
    let nowAge = year-in_year;
    if(parseInt(month+day) < in_month){
        nowAge --;
    }

    return '만'+nowAge+'살 입니다.';
}

console.log(ans2('991003'));
console.log(ans2('000919'));
//Q3
function ans3(num){
    let star = '';

    // console.log(Math.floor(num/2));

    for (let i = 0, j=0; i < num; i++) {

        for (let k = 0; k < (num - j); k++) {
            star += k < j ? " " : "*";
        }

        if(i < Math.floor(num/2)){
                j++;
        }else{

                j--;
        }

        star +='\n';
    }

    return star;
}

console.log(ans3(5));
console.log(ans3(9));
console.log(ans3(7));


//Q4
function ans4(str){
    const arrStr = str.split(';');

    return arrStr.sort((a,b)=> b -a);

    
}
console.log(ans4('51900;83000;158000;367500;250000;59200;128500;1304000'));

//Q5
class Member{

    constructor(id,name,tel,email){
        this.id=id;
        this.name = name;
        this.tel = tel;
        this.email = email;
    }

    toString(){
        return `id:${this.id},name:${this.name},tel:${this.tel},email:${this.email} 입니다`;
    }
}
const james = new Member('james','제임스','010-000-0000','iiqq@naver.com');
const maria = new Member('maria','마리아','010-000-0000','maria@naver.com');
console.log(james.toString());
console.log(maria.toString());
