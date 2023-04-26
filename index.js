let input = document.querySelector('input')
let button = document.querySelector('button')
let aside = document.querySelector('aside')
let mensaje = document.querySelector('p')



function alertMsg(){
  document.querySelector('p').innerHTML = input.value
  input.onmouseup = input.value = 'Enter message'
}


function clear() {
  input.value = ''
}

button.onclick = alertMsg;
input.onclick =  clear;