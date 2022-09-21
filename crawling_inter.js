const axios = require('axios');
    const cheerio = require('cheerio');         // cheerio : python의 beautifulsoup이랑 같음
    const iconv = require('iconv-lite');
    const url = 'http://book.interpark.com/display/collectlist.do?_method=bestsellerHourNew&bookblockname=b_gnb&booklinkname=%BA%A3%BD%BA%C6%AE%C1%B8&bid1=w_bgnb&bid2=LiveRanking&bid3=main&bid4=001&utm_term=%EC%9D%B8%ED%84%B0%ED%8C%8C%ED%81%AC%EB%8F%84%EC%84%9C&gclid=CjwKCAjwyaWZBhBGEiwACslQo0ocm-JpLvRI-VgcjHaAorrnBsUWyQIURWNV_ez1OgH0B7kQDrvXRhoCgmcQAvD_BwE';


    axios.get(url ,{responseType: 'arraybuffer'})      // axios 데이터를 가져오는 역할         // promise
        .then(response => {
            //console.log(response.data);
            let res =response.headers['content-type'];
            let charset = res.includes('charset=')? res.split('charset=')[1]: 'UTF-8';
            let responseData = response.data;
            let data = iconv.decode(responseData, charset)
            const $ = cheerio.load(data);
            $('.listItem, .singleType').each((index, element) => {
                let title = $(element).find('.itemName').text().trim(); //trim : 여백 지우기
                let author = $(element).find('.author').text().trim();
                let company = $(element).find('.company').text().trim();
                let price = $(element).find('.price').text().trim();
                author = author.split(',').map(x => x.trim()).join(', ');
                console.log(index+1, '===============================================');
                console.log(title);
                console.log(author);
                console.log(company);
                console.log(price);
            });
        })
        .catch(err => {
            console.log(err);
        });


const fs = require('fs');

fs.readFile('파일명','utf8',(err,data)=>{
    const dataArray = data.split('\n');
    let output = '';
    dataArray.forEach((item,index)=>{
        line = '';
        for (let i =0;i<index+1;i++){
            line += item;
        }

        output += line+'\n';
    });

    fs.writeFile('파일명',output,err=>{
        if(err)
            console.log(err);
    });
})