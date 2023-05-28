let textArea = document.querySelector(".text-area")
let button = document.querySelector('button')
let aside = document.querySelector('aside')
let mensaje = document.querySelector('.message')
let lateralSpace = document.querySelector('.imgLateralSpace')

function alertMsg(){
  lateralSpace.style.display = 'none';
  document.querySelector('p').innerHTML = textArea.value
  mensaje.onclick.innerHTML = mensaje
}

button.onclick = alertMsg;
