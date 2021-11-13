const list = document.getElementById('book-box')
const formElement = document.getElementById('add-book')
const filterElement = document.getElementById('filter-todo')
const searchBar = document.getElementById('search-todo')



document.addEventListener('DOMContentLoaded', getSavedData)
list.addEventListener('click', deleteTodos);
list.addEventListener('click', completeTodo)
formElement.addEventListener('submit', addTodo);
filterElement.addEventListener('click', filterTodo)
searchBar.addEventListener('keyup', searchEngine)

function addTodo(e) {
    e.preventDefault()
    const value = formElement.querySelector('input').value
    if (value === '') {
        alert('This is empty')
    } else {
        const todoContainer = document.createElement('li')
        const todoName = document.createElement('span')
        const deleteBtn = document.createElement('span')
        const completeBtn = document.createElement('span')



        saveTodos(value)


        todoName.textContent = value
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'


        todoName.className = 'todo'
        deleteBtn.className = 'delete'
        completeBtn.className = "check"
        todoContainer.style.backgroundColor = randomBgColor()
        todoContainer.style.borderLeftColor = randomBorderColor()



        list.appendChild(todoContainer)
        todoContainer.appendChild(todoName)
        todoContainer.appendChild(deleteBtn)
        todoContainer.appendChild(completeBtn)
    }

    formElement.querySelector('input').value = ''
}


function randomBgColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function randomBorderColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function deleteTodos(e) {
    if (e.target.className == 'far fa-trash-alt') {
        const li = e.target.parentElement.parentElement
        list.removeChild(li)
        removeTodos(li);
    }
}

function completeTodo(e) {
    if (e.target.className == 'fas fa-check') {
        const liElement = e.target.parentElement.parentElement
        liElement.classList.toggle('complete')
    }
}

function searchEngine(e) {
    const input = e.target.value.toLowerCase()
    const books = list.getElementsByTagName('li')
    Array.from(books).forEach((book) => {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(input) != -1) {
            book.style.display = 'block'
        } else {
            book.style.display = 'none'
        }
    })
}

function saveTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function removeTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem("todos", JSON.stringify(todos))
}

function filterTodo(e) {
    const todos = list.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case "all-option":
                todo.style.display = "block";
                break;
            case "completed-option":
                if (todo.classList.contains("complete")) {
                    todo.style.display = "block";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted-option":
                if (todo.classList.contains("complete")) {
                    todo.style.display = "none";
                } else {
                    todo.style.display = "block";
                }
                break;
        }
    })
}

function getSavedData() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo) {

        const todoContainer = document.createElement('li')
        const todoName = document.createElement('span')
        const deleteBtn = document.createElement('span')
        const completeBtn = document.createElement('span')


        todoName.textContent = todo
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>'
        completeBtn.innerHTML = '<i class="fas fa-check"></i>'


        todoName.className = 'todo'
        deleteBtn.className = 'delete'
        todoContainer.style.backgroundColor = randomBgColor()
        todoContainer.style.borderLeftColor = randomBorderColor()


        list.appendChild(todoContainer)
        todoContainer.appendChild(todoName)
        todoContainer.appendChild(deleteBtn)
        todoContainer.appendChild(completeBtn)
    })
}










