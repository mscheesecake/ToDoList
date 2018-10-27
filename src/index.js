const $taskInput = document.getElementById("task");
const $todoList = document.getElementById("list");

//listeners
document.getElementById("add").addEventListener("click", addTask);
$todoList.addEventListener("click", removeTask);

//create new task
function addTask() {
  const li = document.createElement("li");
  li.textContent = $taskInput.value;
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("delete-item");
  removeBtn.textContent = "Remove";
  li.appendChild(removeBtn);
  $todoList.appendChild(li);
  $taskInput.value = "";
}

//remove task
function removeTask(e) {
  if (e.target.classList.contains("delete-item")) {
    e.target.parentElement.remove();
  }
}
