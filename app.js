const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

function addTodo(e) {
  e.preventDefault();
  const todo = todoInput.value;
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const todoLi = document.createElement("li");
  todoLi.innerText = todo;
  todoDiv.appendChild(todoLi);
  const completedBtn = document.createElement("button");
  completedBtn.classList.add("completed");
  completedBtn.innerText = "Done";
  todoDiv.appendChild(completedBtn);
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerText = "X";
  todoDiv.appendChild(deleteBtn);
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function checkDelete(e) {
  if (e.target.classList[0] === "delete") {
    const todo = e.target.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  } else if (e.target.classList[0] === "completed") {
    const todo = e.target.parentElement;
    const li = todo.querySelector("li");
    li.classList.toggle("done");
  }
}

addTodoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", checkDelete);
