const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

const users = {};


// 정적 컨텐츠
app.use(express.static('public'));
app.use(bodyParser.json());

// route
app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.post('/user', (req, res) =>{
    const { name } = req.body;
    const id = Date.now();
    users[id] = name;
    res.status(201).send('등록 성공');
})

app.listen(port, () => {
    console.log(`expressapp2 서버가 ${port} 에서 대기중입니다.`);
});