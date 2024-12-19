document.querySelector('#joinBtn').addEventListener('click', ()=>{
    let firstName = document.querySelector('#firstname').value
    let lastName = document.querySelector('#lastname').value

    if (firstName === '' || lastName === '') {
        document.querySelector('#result').innerHTML = "Please fill the all fields"
    } else {
        document.querySelector('#result').innerHTML = `${firstName} ${lastName}`
    }
})


// + concat, template literals, if - else if - else, condition, comparison operator, logical operator

