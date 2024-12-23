document.querySelector('#runBtn').addEventListener('click', ()=>{
    let totalRound = parseInt(document.querySelector('#input').value)
    let currentLap = 1
    let resultElement = document.querySelector('#result')

    resultElement.innerHTML = ''

    while(currentLap <= totalRound) {
        resultElement.innerHTML += `<h1>Lap ${currentLap} is completed</h1>`
        currentLap++
    }

    resultElement.innerHTML += `<h1>You Won!</h1>`
})