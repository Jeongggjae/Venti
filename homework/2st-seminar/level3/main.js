const crypto = require('crypto');
const fs = require('fs');

const fileName = 'dudgns3tp';
const password = 'heisbeautiful';

crypto.randomBytes(64, (err,buf) => {
    const salt = buf.toString('base64'); // saltㄹ,ㄹ 이용해 문자열을 암호화
    
    crypto.pbkdf2(password, salt, 100000, 64, 'sha512', (err, key) => {
        console.log(`password: ${kery.toString('base64')}`);

        const hashed = key.toString('base64');

        fs.writeFile(`${filename}.txt`, key.toString('bv'))
    })
})