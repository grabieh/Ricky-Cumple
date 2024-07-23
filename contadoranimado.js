import confetti from "https://esm.run/canvas-confetti@1";

const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const dd = document.getElementById('dd')
const hh = document.getElementById('hh')
const mm = document.getElementById('mm')
const ss = document.getElementById('ss')

const day_dot = document.querySelector('.day_dot')
const hr_dot = document.querySelector('.hr_dot')
const min_dot = document.querySelector('.min_dot')
const sec_dot = document.querySelector('.sec_dot')

const bday = '07/17/2025'

const x = setInterval(function() {
    const date = new Date(bday).getTime()
    const countDown = new Date().getTime()
    const timeLeft = date - countDown

    const d = Math.floor((timeLeft / (1000 * 60*60*24)))
    const h = Math.floor((timeLeft % (1000*60*60*24)) /(1000*60*60))
    const m = Math.floor((timeLeft % (1000*60*60)) /(1000*60))
    const s = Math.floor((timeLeft % (1000*60)) /(1000))

    days.innerHTML = modDate(d) + ' <br><span>Days<span>'
    hours.innerHTML = modDate(h) + ' <br><span>Hours<span>'
    minutes.innerHTML = modDate(m) + ' <br><span>Minutes<span>'
    seconds.innerHTML = modDate(s) + ' <br><span>Seconds<span>'

    dd.style.strokeDashoffset = 440 - (440 * d) / 365
    hh.style.strokeDashoffset = 440 - (440 * h) / 24
    mm.style.strokeDashoffset = 440 - (440 * m) / 60
    ss.style.strokeDashoffset = 440 - (440 * s) / 60

    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`
    min_dot.style.transform = `rotateZ(${m * 6}deg)`
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`

    if(timeLeft < 0) {
        clearInterval(x)
        confetti({particleCount: 900,  spread: 200})
        
        document.getElementById('time').style.display = 'none'
        document.getElementById('h1').style.display = 'none'
        document.getElementById('message').style.display = 'inline'

        const video = document.getElementById('video')
        setTimeout(() => {
            video.style.display = 'block'
        }, 5000);
        setTimeout(() => {
            video.style.display = 'none'
            const fireworks = setInterval(function() {
                const dateEnd = new Date(`07/18/2025`)
                const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 }
                if( dateEnd === Date.now()) {
                    clearInterval(fireworks)
                    
                }
                function randomInRange(min, max) {
                    return Math.random() * (max - min) + min;
                  }
                confetti({
                    ...defaults, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
                })
                confetti({
                    ...defaults, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
                })
            },800) 
        },50000) 
    }
})

function modDate(time) {

    return time < 10 ? ("0" + time) : time;
}


