// https://jsonplaceholder.typicode.com/posts/1

let postID = 1
fetchPost()

function toggleDisableBtn(){
    if(postID === 1) {
        document.getElementById('prevBtn').disabled = true
    } else {
        document.getElementById('prevBtn').disabled = false
    }
}

toggleDisableBtn()

function fetchPost() {
    let url = `https://jsonplaceholder.typicode.com/posts/${postID}`
    fetch(url).then( response => {
        return response.json()
    }).then(data => {
        let resultElement = document.getElementById('result')
    
        resultElement.innerHTML = `
                                <h1>${data.id} - ${data.title}</h1>
                                <p>${data.body}</p>
                                `
    })
}

document.getElementById('nextBtn').addEventListener('click', ()=>{
    postID++
    toggleDisableBtn()
    fetchPost()
})

document.getElementById('prevBtn').addEventListener('click', (event)=>{
    postID--
    toggleDisableBtn()
    fetchPost()
})

