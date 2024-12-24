let fruits = ['apple', 'orange', 'grapes', 'banana']

// let filteredFruits = fruits.filter( item => item.includes('r'))

// filteredFruits.forEach(item => {
//     document.getElementById('result').innerHTML += `<h1>${item}</h1>`
// })

document.querySelector('#searchInput').addEventListener('keyup', (event)=>{
    let key = event.target.value

    let filteredFruits = fruits.filter( item => item.includes(key))

    document.getElementById('result').innerHTML = ''

    filteredFruits.forEach(item => {
        document.getElementById('result').innerHTML += `<h1>${item}</h1>`
    })
})
