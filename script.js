var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var divin = document.querySelector('#divin')

btn.addEventListener('click',()=>{

    a =0
   var int = setInterval(()=>{
        a++
        divin.style.width= a+'%'
        h2.innerHTML = a+'%'
    },100)
    
    btn.style.pointerEvents ='none'

    setTimeout(()=>{
        clearInterval(int)
        btn.innerHTML='Downloaded'
        btn.style.opacity = 0.5
    },10000)
})