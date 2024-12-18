// function statement
// function changeText() {
//     document.querySelector('#paragraph1').innerHTML = "paragraph 1 changed"
// }


// let changeText = function () {
//     document.querySelector('#paragraph1').innerHTML = "paragraph 1 changed"   
// }

// arrow function
let changeText = () => {
    document.querySelector('#paragraph1').innerHTML = "paragraph 1 changed" 
}

// onclick in javascript

// document.querySelector('#changeBtn').onclick = function(){
//     changeText()
// }

let changeBtn = document.querySelector('#changeBtn')

// using event listner
changeBtn.addEventListener('click', () => {
    changeText()
})

changeBtn.addEventListener('mouseover', () => {
    console.log("Mouse hovered")
})

// event, event handling, way of event handlings, variable, way to write function