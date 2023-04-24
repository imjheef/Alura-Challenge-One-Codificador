let input = document.querySelector('input')
let button = document.querySelector('button')

function clear() {
  input.value = ''
}

function alertMsg(){
  alert(input.value)
  input.onmouseup = input.value = 'Enter message'
}

button.onclick = alertMsg;
input.onclick = clear;
body.onclick =  clear;