let textArea = document.querySelector(".text-area")
let button = document.querySelector('button')
let aside = document.querySelector('aside')
let mensaje = document.querySelector('.message')
let asideImg = document.querySelector('.imgLateralSpace')

function hideImg() {
    asideImg.style.display = 'none';
}

function alertMsg(){
  document.querySelector('p').innerHTML = textArea.value
  mensaje.onclick.innerHTML = mensaje
}

asideImg.onclick = hideImg
button.onclick = alertMsg;
