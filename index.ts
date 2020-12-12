import { encrypt, decrypt } from './cipher';

const originalText: string = '';

const cipherText: string = encrypt(originalText);
console.log(`Cipher Text : ${cipherText}`);

const plainText: string = decrypt(cipherText);
console.log(`Plain Text  : ${plainText}`);
