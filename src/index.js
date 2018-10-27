const $taskInput = document.getElementById("task");
const $todoList = document.getElementById("list");
const $addButton = document.getElementById("add");

//listeners
$addButton.addEventListener("click", addTask);
$todoList.addEventListener("click", removeTask);
$taskInput.addEventListener("keydown", addWithEnter);

//create new task
function addTask() {
  if ($taskInput.value !== "") {
    const $taskElement = document.createElement("li");
    $taskElement.textContent = $taskInput.value;
    const $removeBtn = document.createElement("button");
    $removeBtn.classList.add("delete-item");
    $removeBtn.textContent = "Remove";
    $taskElement.appendChild($removeBtn);
    $todoList.appendChild($taskElement);
    $taskInput.value = "";
  }
}

//add new task by pressing Enter
function addWithEnter(event) {
  if (event.key === "Enter") {
    addTask();
  }
}

//remove task
function removeTask(event) {
  const $clickedElement = event.target;
  if ($clickedElement.classList.contains("delete-item")) {
    $clickedElement.parentElement.remove();
  }
}
