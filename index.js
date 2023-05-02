let textArea = document.querySelector('textarea')
let button = document.querySelector('button')
let aside = document.querySelector('aside')
let mensaje = document.querySelector('p')



function alertMsg(){
  document.querySelector('h1').innerHTML = textArea.value
  mensaje.onclick.innerHTML = '<a/>'
}

button.onclick = alertMsg;