let count = 0;
const newTodoInput = document.querySelector('input');
const addTodoBtn = document.querySelector('button.add_todo');
const show_pendingBtn = document.querySelector('button.show_pending');
const show_completedBtn = document.querySelector('button.show_completed');
const show_allBtn = document.querySelector('button.show_all');
const todolist = document.querySelector('div.todos');
const manualTodos = document.querySelector('div.Manual_Todos');
addTodoBtn.addEventListener("click",addTodo);
show_pendingBtn.addEventListener("click",showPending);
show_completedBtn.addEventListener("click",showCompleted);
show_allBtn.addEventListener("click",fetchTodos);


function addTodo(){
    let typedInput = newTodoInput.value;
    let paragraphContent = document.createElement("p");
    paragraphContent.setAttribute("key",count);
    count += 1;
    paragraphContent.innerHTML = typedInput;
    // manualTodos.append(paragraphContent);
    // newTodoInput.value = ""
    paragraphContent.addEventListener("click",paragraphContent.remove);
    pendingArray.unshift({"userId": 'new',
    "id": 'new',
    "title": typedInput,
    "completed": false})
}

const completedArray = []
const pendingArray = []
const fetchedTodos = document.querySelector('div.Fetched_Todos');
async function fetchTodos(){
    fetchedTodos.innerHTML=null
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await res.json();
    let output = `<table><tr><th>Id</th><th>User Id</th><th>Description</th><th>Status</th></tr>`;
    data.forEach(function(todo) {
        output +=`<tr>
                    <td>${todo.id}</td>
                    <td>${todo.userId}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed ? "Completed" : "Pending...."}</td>
                </tr>`
        if (todo.completed) {
            completedArray.push({"userId": todo.userId,
            "id": todo.id,
            "title": todo.title,
            "completed": true});
        }
        else {
            pendingArray.push({"userId": todo.userId,
            "id": todo.id,
            "title": todo.title,
            "completed": false});
        }
    });
    output += `</table>`
    document.querySelector('.Fetched_Todos').innerHTML = output;    
}
fetchTodos();

function showPending(){
    fetchedTodos.innerHTML=null
    let output = `<table><tr><th>Id</th><th>User Id</th><th>Description</th><th>Status</th></tr>`;
    pendingArray.forEach(function(todo) {
        output +=`<tr>
                    <td>${todo.id}</td>
                    <td>${todo.userId}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed ? "Completed" : "Pending...."}</td>
                </tr>`
    });
    output += `</table>`
    document.querySelector('.Fetched_Todos').innerHTML = output;
}
function showCompleted(){
    fetchedTodos.innerHTML=null
    let output = `<table><tr><th>Id</th><th>User Id</th><th>Description</th><th>Status</th></tr>`;
    completedArray.forEach(function(todo) {
        output +=`<tr>
                    <td>${todo.id}</td>
                    <td>${todo.userId}</td>
                    <td>${todo.title}</td>
                    <td>${todo.completed ? "Completed" : "Pending...."}</td>
                </tr>`
    });
    output += `</table>`
    document.querySelector('.Fetched_Todos').innerHTML = output;
}