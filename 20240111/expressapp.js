const express = require('express');
const app = express();
const port = 3000;

// middle ware. 서블릿에 접근하기 전에 공통적으로 거치는 것
function myLogger(req, res, next){
    req.requestTime = Date.now();
    console.log('http method: ', req.method);
    console.log('request url: ', req.url);

    next();
}

app.use(myLogger);

// 정적 컨텐츠
app.use(express.static('public'));

// route
app.get('/', (req, res) => {
    const readableTime = new Date(req.requestTime).toLocaleString();
    res.status(200).send(`여기는 루트임, 요청받은 시간: ${readableTime}`);
});



app.get('/about', (req,res) => {
    res.send('여기는 어바웃임');
})

app.get('/product', (req,res) => {
    res.send('여기는 상품임');
})

app.post('/', (req,res) => {
    res.send('루트에 포스트');
})

app.delete('/', (req,res) => {
    res.send('루트에 딜리트');
})

app.put('/', (req,res) => {
    res.send('루트에 푸트');
})

app.patch('/', (req,res) => {
    res.send('루트에 패치');
})

app.listen(port, () => {
    console.log(`서버가 ${port} 에서 대기중입니다.`);
});