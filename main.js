let todo = document.createElement('li')

todo.textContent = "estudar"

let todoList = document.querySelector('ul')

todoList.appendChild(todo)

// para remover precisamos remover duas vezes
// todoList.removeChild(todoList.firstChild)
// todoList.removeChild(todoList.firstChild)

while(todoList.firstChild){
    todoList.removeChild(todoList.firstChild)
}