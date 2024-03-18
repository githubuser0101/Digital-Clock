const clock = document.querySelector('div')

setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()
}, 1000)