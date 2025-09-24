const taskInput = document.querySelector("#taskInput");
const taskAdd = document.querySelector("#taskAdd");
const btnText = taskAdd.textContent;
const recordsDisplay = document.querySelector("#records");
let taskArray = [];

let edit_id = null;

let objStr = localStorage.getItem("taskname");

if (objStr) {
  taskArray = JSON.parse(objStr);
} else {
  taskArray = [];
}

console.log(taskArray);

displayInfo();

taskAdd.addEventListener("click", function () {
  const taskVal = taskInput.value;
  if (taskVal != "") {
    if (edit_id != null) {
      taskArray.splice(edit_id, 1, { name: taskVal });
      edit_id = null;
      displayInfo();
    } else {
      taskArray.push({ name: taskVal });
      saveInfo(taskArray);
    }

    taskInput.value = "";
    displayInfo();
    taskAdd.textContent = btnText;
  }
});

function saveInfo(taskArray) {
  const taskArrayStr = JSON.stringify(taskArray);
  localStorage.setItem("taskname", taskArrayStr);
  displayInfo();
}

function displayInfo() {
  let statement = "";

  taskArray.forEach((task, index) => {
    statement += `<ul  class="list-group list-group-horizontal rounded-0 bg-transparent"><li
                      class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
                      <p class="lead fw-normal mb-0 showTask">${task.name}</p>
                      </li>
                      <li class="list-group-item ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
                      <div class="d-flex flex-row justify-content-end mb-1">
                      <a href="#!" class="text-info" data-mdb-tooltip-init title="Edit todo"><i
                      class="fas fa-pencil-alt me-3" onclick='editInfo(${index})'></i></a>
                      <a href="#!" class="text-danger" data-mdb-tooltip-init title="Delete todo"><i
                      class="fas fa-trash-alt" onclick='deleteInfo(${index})'></i></a>
                      </div>
                      </li> </ul>`;
  });
  recordsDisplay.innerHTML = statement;
}

function editInfo(id) {
  edit_id = id;
  taskInput.value = taskArray[id].name;
  taskAdd.textContent = "Save changes";
}

function deleteInfo(id) {
  taskArray.splice(id, 1);
  saveInfo(taskArray);
  displayInfo();
}
