let emails = ["hello@mail.com", "test@mail.com", "test1@mail.com"]

document.querySelector('#checkBtn').addEventListener('click', () => {
    let currentEmail = document.querySelector('#input').value

    let email = emails.find( item => item === currentEmail)

    if ( email === undefined){
        document.querySelector('#result').innerHTML = "Email is not found."
    } else {
        document.querySelector('#result').innerHTML = `Email-${email} is found.`
    }
})