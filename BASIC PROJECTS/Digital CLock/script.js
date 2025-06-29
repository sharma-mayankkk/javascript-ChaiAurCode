const clock = document.querySelector('#clock')

setInterval(()=>{
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString('en-US', {hour12: false});
},1000) //always set time in ms:
