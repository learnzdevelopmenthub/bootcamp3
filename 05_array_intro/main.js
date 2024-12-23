let fruits = ["apple", "orange", "banana", "grapes"]

fruits.forEach( (item, position, array) => {
    document.querySelector('#result').innerHTML += `<h1>${position} - ${item}</h1>`    
})

// while, append +=, createElement, appendChild, array, push, pop, position, splice, forEach