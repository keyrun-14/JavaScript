let count=0;
let btn=document.querySelector("button");
btn.addEventListener("click",adding);

function adding() {
    let name=document.querySelector("input").value;
    let todos=document.querySelector(".todos");
    let content=document.createElement("p");
    document.querySelector("input").value=""       
    content.setAttribute("key",count);
    count=count+1; 
    content.innerHTML=name;
    todos.append(content);
    content.addEventListener("click",content.remove);
}


// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then(response => response.json())
//   .then(data => console.log(data));


let showall=document.querySelector("button");
showall.addEventListener("click",showAll);
  function showAll(){
      fetchTodos();
      }
      async function fetchTodos(){
        let res = await fetch('https://jsonplaceholder.typicode.com/todos');
        let data = await res.json();
        let output = '';
        data.forEach(function(todo, index) {
            output +=`<p key=${index}>
                        <span class = "task">
                        ${todo.title}
                        </span>
                    </p>`
        });
        document.querySelector('.todos').innerHTML = output;
        }
        // fetchTodos();