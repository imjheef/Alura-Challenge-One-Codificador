let textArea = document.querySelector('textarea')
let button = document.querySelector('button')
let aside = document.querySelector('aside')
let mensaje = document.querySelector('p')



function alertMsg(){
  document.querySelector('p').innerHTML = textArea.value
  textArea.onmouseup = textArea.value = 'Enter message'
}


function clear() {
  textArea.value = ''
}

button.onclick = alertMsg;
textArea.onclick =  clear;