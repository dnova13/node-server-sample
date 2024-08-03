const crypto = require('crypto');

//
// let key = '1231fsdfsdfsfsdf';

// function encryptAES_CBC(plaintext, key) {
//     // let key16 = Buffer.from(key); // 16바이트 길이의 키
//     let iv = crypto.randomBytes(16); // 랜덤 IV 생성

//     console.log('iv', iv);
//     // console.log('key16', key16);

//     let cipher = crypto.createCipheriv('aes-128-cbc', key, iv);

//     console.log('cipher', cipher);

//     let encrypted = cipher.update(plaintext, 'utf8', 'base64');
//     encrypted += cipher.final('base64');

//     return iv.toString('base64') + ':' + encrypted;
// }

// function decryptAES_CBC(encryptText, key) {
//     // let key16 = Buffer.from(key); // 16바이트 길이의 키
//     let encryptTextBuffer = Buffer.from(encryptText, 'base64');
//     console.log('key', key);

//     let iv = encryptTextBuffer.slice(0, 16);

//     console.log('iv', iv);

//     let encryptedText = encryptTextBuffer.slice(16).toString('base64');

//     let decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);

//     console.log('decipher', decipher);

//     let decrypted = decipher.update(Buffer.from(encryptedText, 'base64'), 'base64', 'utf8');

//     decrypted += decipher.final('utf8');

//     return decrypted;
// }

// const crypto = require('crypto');

// const algorithm = 'aes-128-cbc';
const secretKey = 'abcdefghijklmnop';
// const iv = '00000000000000000000000000000000';

// let iv = crypto.randomBytes(16).toString('base64');
// console.log('iv', iv);

const encryptAES_ECB = (plaintext, secretKey) => {
    const algorithm = 'aes-128-ecb';

    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), null);
    let encrypted = cipher.update(plaintext);
    encrypted = Buffer.concat([encrypted, cipher.final()]).toString('hex');

    return encrypted;
};

const decryptAES_ECB = (encryptText, secretKey) => {
    const algorithm = 'aes-128-ecb';

    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), null);
    let decrypted = decipher.update(Buffer.from(encryptText, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]).toString();

    return decrypted;
};

const encryptAES_CBC = (plaintext, secretKey, ivHex) => {
    const algorithm = 'aes-128-cbc';

    if (!ivHex) {
        let iv = crypto.randomBytes(16);
        ivHex = iv.toString('hex');
    }

    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), Buffer.from(ivHex, 'hex'));
    let encrypted = cipher.update(plaintext);
    encrypted = Buffer.concat([encrypted, cipher.final()]).toString('hex');

    return { encrypted, ivHex };
    // return encrypted + ':' + ivHex;
};

const decryptAES_CBC = (encryptText, secretKey, ivHex) => {
    const algorithm = 'aes-128-cbc';

    const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey), Buffer.from(ivHex, 'hex'));
    let decrypted = decipher.update(Buffer.from(encryptText, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]).toString();

    return decrypted;
};

const encrypted = encryptAES_ECB('Hello Worlfsdfsddddddddddddddddfd!', secretKey);
console.log(`encrypted:`, encrypted);

const decrypted = decryptAES_ECB(encrypted, secretKey);
console.log(`decrypted: ${decrypted}`);

// const encrypted = encryptAES_CBC('Hello World!', secretKey);
// console.log(`encrypted:`, encrypted);
// console.log(`encrypted:`, `${encrypted.encrypted}:${encrypted.ivHex}`);

// const decrypted = decryptAES_CBC(encrypted.encrypted, secretKey, encrypted.ivHex);
// console.log(`decrypted: ${decrypted}`);
