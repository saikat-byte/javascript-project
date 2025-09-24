const addTask = document.getElementById("inputValue");
const showTaskBox = document.getElementById("showTaskBox");
const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", function () {
  const inputValue = addTask.value.trim();

  if (inputValue === "") {
    alert("Add a task");
    return;
  }

  // Creatre li and button
  const list = document.createElement("li");
  list.textContent = inputValue;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    showTaskBox.removeChild(list);
  });

  list.appendChild(deleteBtn);

  showTaskBox.appendChild(list);

  addTask.value = "";
});
