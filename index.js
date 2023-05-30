let textArea = document.querySelector(".text-area")
let message = document.querySelector('.message')
let copy = document.querySelector(".copy");
copyText.style.display = "none"



/*  La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncrypt(){
  const textEncrypted = encrypt(textArea.value);
  message.value = textEncrypted;
  textArea.value = '';
  message.style.backgroundImage = 'none';
}

function btnDecrypt(){
  const textDecrypted = decrypt(textArea.value);
  message.value = textDecrypted;
  textArea.value = '';
  message.style.backgroundImage = 'none';
}

function encrypt(stringEncrypted){
  let arrayCode = [
    ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncrypted = stringEncrypted.toLowerCase()

    for (let i = 0; i < arrayCode.length; i++) {
      if (stringEncrypted.includes(arrayCode[i][0])) {
        stringEncrypted = stringEncrypted.replaceAll(arrayCode[i][0], arrayCode[i][1])
      }
    }
    return stringEncrypted
}

function decrypt(stringDecrypted){
  let arrayCode = [
    ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDecrypted = stringDecrypted.toLowerCase()

    for (let i = 0; i < arrayCode.length; i++) {
      if (stringDecrypted.includes(arrayCode[i][1])) {
        stringDecrypted = stringDecrypted.replaceAll(arrayCode[i][1], arrayCode[i][0])
      }
    }
    return stringDecrypted
}

function copyText(){
  message.select();
  navigator.clipboard.writeText(message.value)
  message.value = "";
  alert("Copied to Clipboard")
}