const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    // 헤더
    res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

    // 바디
    try {
        console.log(req.method, req.url);
        if (req.method === 'GET') {
            let data = "";
            if (req.url === '/') {
                data = await fs.readFile('./index.html');
            } else if (req.url === '/about') {
                data = await fs.readFile('./about.html');
            } else if (req.url === '/product') {
                data = await fs.readFile('./product.html');
            } else {
                data = '없어용';
            }
            res.end(data);
        } else {
            console.log('메소드 미지원');
            res.writeHead(404);
            res.end('요청에 대해 처리할 수 없습니다.');
        }
    } catch (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; charset=UTF-8'});
        res.end('내부 오류');
    }
});

server.on('request', () => {
    console.log('요청이 왔습니다');
});

server.on('connection', () => {
    console.log('연결이 되었습니다.');
});

server.on('close', () => {
    console.log('연결이 종료되었습니다.');
});

server.listen(3000);
