document.getElementById("app").innerHTML = `

<div>

</div>
`;

//create new task
document.getElementById("add").addEventListener("click", addTask);

function addTask() {
  const task = document.getElementById("task").value;
  const ul = document.getElementById("list");
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  const removeBtn = document.createElement("BUTTON");
  removeBtn.className = "delete-item";
  const txt = document.createTextNode("DONE");
  removeBtn.appendChild(txt);
  li.appendChild(removeBtn);
  ul.appendChild(li);
  document.getElementById("task").value = "";
}

document.getElementById("list").addEventListener("click", removeTask);
function removeTask(e) {}
//remove task
