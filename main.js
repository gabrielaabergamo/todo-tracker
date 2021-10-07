let formUser = document.querySelector('form')
let todoList = document.querySelector('ul')
let botaoClear = document.querySelector('button')
let inputUser = document.getElementById('user-todo')

formUser.addEventListener('submit', function(e){
    e.preventDefault()
    todoMaker(inputUser.value)
    inputUser.value = ''
    
})

function todoMaker(valor){
    let addTodo = document.createElement('li')
    addTodo.textContent = valor
    todoList.appendChild(addTodo)
}


botaoClear.addEventListener('click', function(){
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild)
    }
})

