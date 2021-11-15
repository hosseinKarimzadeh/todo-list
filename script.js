const list = document.getElementById('book-box')
const formElement = document.getElementById('add-book')
const filterElement = document.getElementById('filter-todo')
const searchBar = document.getElementById('search-todo')



document.addEventListener('DOMContentLoaded', getSavedData)
list.addEventListener('click', deleteTodos);
list.addEventListener('click', completeTodo)
list.addEventListener('click', redBtnChanger)
list.addEventListener('click', blueBtnChanger)
list.addEventListener('click', yellowBtnChanger)
list.addEventListener('click', greenBtnChanger)
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
        const deleteBtn = document.createElement('i')
        const completeBtn = document.createElement('i')
        const colorChangerContainer = document.createElement('span')
        const redBtn = document.createElement('button')
        const blueBtn = document.createElement('button')
        const yellowBtn = document.createElement('button')
        const greenBtn = document.createElement('button')



        saveTodos(value)


        todoName.textContent = value


        todoName.className = 'todo'
        deleteBtn.className = 'far fa-trash-alt'
        completeBtn.className = "fas fa-check"
        redBtn.className = 'red-btn'
        blueBtn.className = 'blue-btn'
        yellowBtn.className = 'yellow-btn'
        greenBtn.className = 'green-btn'





        list.appendChild(todoContainer)
        todoContainer.appendChild(todoName)
        todoContainer.appendChild(deleteBtn)
        todoContainer.appendChild(completeBtn)
        todoContainer.appendChild(colorChangerContainer)
        colorChangerContainer.appendChild(redBtn)
        colorChangerContainer.appendChild(blueBtn)
        colorChangerContainer.appendChild(yellowBtn)
        colorChangerContainer.appendChild(greenBtn)

    }

    formElement.querySelector('input').value = ''
}

function redBtnChanger(e) {
    if (e.target.className == 'red-btn') {
        const li = e.target.parentElement.parentElement
        var x = e.target.parentElement.previousSibling
        var y = e.target.parentElement.previousSibling.previousSibling
        x.style["color"] = 'white'
        y.style["color"] = 'white'
        li.style.backgroundColor = 'red'
    }
}

function blueBtnChanger(e) {
    if (e.target.className == 'blue-btn') {
        const li = e.target.parentElement.parentElement
        var x = e.target.parentElement.previousSibling
        var y = e.target.parentElement.previousSibling.previousSibling
        x.style["color"] = 'white'
        y.style["color"] = 'white'
        li.style.backgroundColor = 'blue'

    }
}

function yellowBtnChanger(e) {
    if (e.target.className == 'yellow-btn') {
        const li = e.target.parentElement.parentElement
        var x = e.target.parentElement.previousSibling
        var y = e.target.parentElement.previousSibling.previousSibling
        x.style["color"] = 'black'
        y.style["color"] = 'black'
        li.style.backgroundColor = 'yellow'
        li.style.color = 'black'
    }
}

function greenBtnChanger(e) {
    if (e.target.className == 'green-btn') {
        const li = e.target.parentElement.parentElement
        var x = e.target.parentElement.previousSibling
        var y = e.target.parentElement.previousSibling.previousSibling
        x.style["color"] = 'white'
        y.style["color"] = 'white'
        li.style.backgroundColor = 'green'
    }

}



function deleteTodos(e) {
    if (e.target.className == 'far fa-trash-alt') {
        const li = e.target.parentElement
        list.removeChild(li)
        removeTodos(li);
    }
}

function completeTodo(e) {
    if (e.target.className == 'fas fa-check') {
        const liElement = e.target.parentElement
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
        const deleteBtn = document.createElement('i')
        const completeBtn = document.createElement('i')
        const colorChangerContainer = document.createElement('span')
        const redBtn = document.createElement('button')
        const blueBtn = document.createElement('button')
        const yellowBtn = document.createElement('button')
        const greenBtn = document.createElement('button')





        todoName.textContent = todo


        todoName.className = 'todo'
        deleteBtn.className = 'far fa-trash-alt'
        completeBtn.className = "fas fa-check"
        redBtn.className = 'red-btn'
        blueBtn.className = 'blue-btn'
        yellowBtn.className = 'yellow-btn'
        greenBtn.className = 'green-btn'





        list.appendChild(todoContainer)
        todoContainer.appendChild(todoName)
        todoContainer.appendChild(deleteBtn)
        todoContainer.appendChild(completeBtn)
        todoContainer.appendChild(colorChangerContainer)
        colorChangerContainer.appendChild(redBtn)
        colorChangerContainer.appendChild(blueBtn)
        colorChangerContainer.appendChild(yellowBtn)
        colorChangerContainer.appendChild(greenBtn)
    })
}
