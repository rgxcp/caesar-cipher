import { originalOrder, substitutionOrder } from './config';

export const encrypt = (plainText: string) => {
  const cipherText: string[] = plainText.split('').map((char: string) => {
    const index: number = originalOrder.indexOf(char);
    return substitutionOrder[index];
  });

  return cipherText.join('');
};

export const decrypt = (cipherText: string) => {
  const plainText: string[] = cipherText.split('').map((char: string) => {
    const index: number = substitutionOrder.indexOf(char);
    return originalOrder[index];
  });

  return plainText.join('');
};
