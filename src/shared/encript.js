'use strict'

function encrypt(text) {
  const saltedText = global.SALT_KEY + text; // Adiciona o salt ao início do texto
  let encryptedText = '';
  for (let i = 0; i < saltedText.length; i++) {
    const charCode = saltedText.charCodeAt(i);
    const encryptedCharCode = charCode + 1; // Adiciona 1 ao código ASCII do caractere
    encryptedText += String.fromCharCode(encryptedCharCode);
  }
  return encryptedText;
}
  
  module.exports = encrypt;