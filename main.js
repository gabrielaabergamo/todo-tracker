window.onload = () =>{
let formUser = document.querySelector('form')
let todoList = document.querySelector('ul')
let botaoClear = document.querySelector('button')
let inputUser = document.getElementById('user-todo')

let todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

localStorage.setItem('todos', JSON.stringify(todosArray))

let storage = JSON.parse(localStorage.getItem('todos'))

formUser.addEventListener('submit', function(e){
    e.preventDefault()

    todosArray.push(inputUser.value)
    localStorage.setItem('todos', JSON.stringify(todosArray))

    todoMaker(inputUser.value)
    inputUser.value = ''
    
})

function todoMaker(valor){
    let addTodo = document.createElement('li')
    addTodo.textContent = valor
    todoList.appendChild(addTodo)
}

for (var i = 0; i < storage.length; i++) {
    todoMaker(storage[i]);
}

botaoClear.addEventListener('click', function(e){
    e.preventDefault()
    localStorage.clear()
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})
}
