document.getElementById('heading').style.color='Red'
document.getElementById('heading').style.backgroundColor='black'

document.getElementById('intro').innerHTML='My name is Lynette Kinga aged 20'
document.getElementById('intro').style.fontSize='30px'

let paragraph=document.createElement('id')
paragraph.innerHTML='I am new'
document.getElementById('container').appendChild(paragraph)
// document.getElementById('container').removeChild(paragraph)
let child=document.getElementById('container').children
console.log({child});

let button=document.getElementById('button')
button.addEventListener('click' ,function(){
    button.innerHTML='Clicked'
})

document.getElementById('container').setAttribute('class','containers')
