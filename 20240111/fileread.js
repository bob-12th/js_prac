const fs = require('fs');
const os = require('os');

// 호출된 순서는 얘가 먼저지만, 비동기이기 때문에 출력 순서는 무작위라고 볼 수 있다~
fs.readFile('example.txt', 'utf-8',(err,data) => {

    if (err) {
        console.error('파일 읽는 중 오류가 발생했습니다.', err)
        return;
    }

    console.log('파일 내용 : ', data);
});

const hostname = os.hostname();
const cpus = os.cpus;
console.log('hostname: ',hostname);
console.log('cpus: ', cpus);