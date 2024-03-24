let todo=document.querySelector(".todo")
let list=document.querySelector("ul")

let todolist = []

function renderTodo() {
    list.innerHTML = ''
    for (let i = 0; i < todolist.length; i++) {
        ul.innerHTML += `<li>${todolist[i]}
        <button id="delete-btn" onclick="deleteTodo(${i})">Delete</button>
        <button onclick="editTodo(${i})">Edit</button>
        </li>`
    }
}

function Addtodo(){
    todolist.push(todo.value);
    console.log(todolist)
    todo.value=''
    renderTodo()
}