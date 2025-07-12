let textInput = document.getElementById("text");
let btn = document.getElementById("btn");
let unordered = document.getElementById("unordered");
let saveBtn = document.getElementById("saveBtn");

let dateInput = document.getElementById("date");
let taskList = [];
function AddTask(task) {
  task = textInput.value;
  taskList.push(task);

  let taskItem = document.createElement("li");

  unordered.appendChild(taskItem);
  taskList.map((item) => {
    taskItem.innerHTML = `<input type="checkbox"/> ${item}  <button id="remove">Remove</button>`;
  });
  console.log(taskList);

  textInput.value = "";

  event.preventDefault();
}
btn.addEventListener("click", AddTask);

function deadline() {
  let deadline = dateInput.value;
  let deadlineDate = new Date(deadline);
  let deadlineFuture = deadlineDate.getDate();
  let date = new Date();
  let dateNow = date.getDate();
  if (deadlineFuture < dateNow) {
    alert("Please use future date");
  }
}

btn.addEventListener("click", deadline);
let removeBtn = document.getElementById("remove");
removeBtn.addEventListener("click", removeTask);

function removeTask(task) {
  taskList.split(task, 1);
}
function save() {
  localStorage.setItem("taskName", taskList);
}
saveBtn.addEventListener("click", save);
