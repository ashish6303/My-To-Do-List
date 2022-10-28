const input = document.querySelector(".input-box")
const button = document.querySelector(".add-button")
const todolist = document.querySelector(".to-do-list")

button.addEventListener("click",addToDo);
todolist.addEventListener("click",deleteTodo)

function addToDo(event){
    // This will prevent to load the new page.
    event.preventDefault();

    const todoDiv = document.createElement("div");
    // This will dinamically create a container and add a list into it.
    todoDiv.classList.add("todo-container");

    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.innerText=input.value;
    todoDiv.appendChild(todoItem);

    const deleteButton = document.createElement("Button")
    deleteButton.classList.add("delete-btn")
    deleteButton.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    todoDiv.appendChild(deleteButton)

    const completeButton = document.createElement("button")
    completeButton.classList.add("complete-btn")
    completeButton.innerHTML='<i class="fa-solid fa-check"></i>'
    todoDiv.appendChild(completeButton)

    // this will create a child class and push it in html
    todolist.appendChild(todoDiv)
    input.value="";
}
function deleteTodo(event){

    const item = event.target;
    if(item.classList[0]==="delete-btn"){
        const delItem = item.parentElement;
        delItem.remove();
    }

    if(item.classList[0]==="complete-btn"){
        const delItem = item.parentElement;
        delItem.classList.toggle("completed");
    }
}

