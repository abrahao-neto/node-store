'use strict'
 
function decrypt(encryptedText) {
    let decryptedText = '';
    for (let i = 0; i < encryptedText.length; i++) {
      const encryptedCharCode = encryptedText.charCodeAt(i);
      const charCode = encryptedCharCode - 1; // Subtrai 1 do código ASCII do caractere
      decryptedText += String.fromCharCode(charCode);
    }
  
    // Remove o salt do início do texto descriptografado
    if (decryptedText.startsWith(global.SALT_KEY)) {
      decryptedText = decryptedText.substring(global.SALT_KEY.length);
    }
  
    return decryptedText;
  }
  
  module.exports = decrypt;