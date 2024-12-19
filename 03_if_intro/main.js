// let isRaining = false

// if (isRaining) {
//     document.querySelector('#result').innerHTML = "take un umberlla!"   
// } else {
//     document.querySelector('#result').innerHTML = "Nothing Needed"   
// }

document.querySelector('#runBtn').addEventListener('click', ()=>{
    let currentWeather = document.querySelector('#input').value

    if (currentWeather === 'raining' || currentWeather === 'too hot') {
        document.querySelector('#result').innerHTML = "take un umberlla!" 
    } else if (currentWeather === 'hot') {
        document.querySelector('#result').innerHTML = "take a cooling glass" 
    } else {
        document.querySelector('#result').innerHTML = "Nothing needed" 
    }

})