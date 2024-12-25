// user can create set of tasks - completed
// user can view all tasks - completed
// user can delete a task - completed
// user can search tasks by name - completed
// user can mark a task as complete and undo - completed

let tasks = []
let resultElement = document.querySelector('#result')

function renderTasks(array) {
    resultElement.innerHTML = ''
    array.forEach( (item) => {
        resultElement.innerHTML += `
                                    <div class=task-wrapper>
                                        <input onchange="toggleComplete(${item.id})" type="checkbox" ${item.isCompleted ? 'checked' : ''}>
                                        <h1 class="${ item.isCompleted ? 'completed' : ''}">${item.name}</h1>
                                        <div >
                                            <button onclick="deleteTask(${item.id})">Delete</button>
                                        </div>
                                    </div>
                                    `
    })
}


document.querySelector('#addBtn').addEventListener('click', ()=>{
    let value = document.querySelector('#taskInput').value
    let task = {id: Date.now(), name: value, isCompleted: false}
    tasks.push(task)
    renderTasks(tasks)
})


function deleteTask(id) {
    tasks = tasks.filter(item => {
        return item.id != id
    })
    renderTasks(tasks)
}

document.querySelector('#searchInput').addEventListener('keyup', event => {    
    let key = event.target.value
    let filteredTasks = tasks.filter(item => {
        return item.name.includes(key)
    })
    renderTasks(filteredTasks)
})


function toggleComplete(id){
    let obj = tasks.find(item => item.id === id)
    obj.isCompleted = !obj.isCompleted
    renderTasks(tasks)
}