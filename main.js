let checkbox = document.querySelector(".checkbox");
let checkboxes = document.querySelectorAll(".checkbox input");
let labels = document.querySelectorAll(".checkbox label");
let x = 0;
let percent = 0;
let percentage = document.querySelector(".progress .percentage");
let progress = document.querySelector(".progress .progress-bar span");
let end = document.querySelector(".end");

checkboxes.forEach((box) => {
  let label = document.querySelector(`label[for="${box.getAttribute("id")}"]`);
  box.addEventListener("change", function () {
    if (box.checked == true) {
      label.style.cssText =
        "color: #00a170; opacity: 0.6; -webkit-text-decoration-line: line-through; text-decoration-line: line-through;";
      x++;
    } else {
      label.style.cssText = "color:#9b2335;";
      x--;
    }
    percent = ((x / 30) * 100).toFixed(0);
    percentage.innerHTML = `${percent}%`;
    progress.style.width = percentage.innerHTML;
    if (percent <= 15) {
      progress.style.cssText += "background-color:red;";
    } else if (percent <= 30) {
      progress.style.cssText += "background-color:#ff9800;";
    } else if (percent <= 65) {
      progress.style.cssText += "background-color:#ffc107;";
    } else if (percent <= 99) {
      progress.style.cssText += "background-color:#8bc34a;";
    } else {
      progress.style.cssText += "background-color:#00a170;";
    }

    if (percent == 100) {
      end.style.cssText += "opacity: 1; z-index: 500;";
      setTimeout(function () {
        end.style.cssText += "opacity: 0; z-index: -1;";
      }, 10000);
    }
  });
});

// let arrayOfTasks = [];
//
// if (localStorage.getItem("tasks")) {
//   arrayOfTasks = JSON.parse(localStorage.getItem("tasks"));
// }
//
// getDataFromLocalStorage();
//
// checkboxes.forEach((box) => {
//   let label = document.querySelector(`label[for="${box.getAttribute("id")}"]`);
//   box.onchange = addTaskToArray(box.checked, label.innerHTML);
// });
//
// function addTaskToArray(boolean, taskText) {
//   // Task Data
//   const task = {
//     id: Date.now(),
//     title: taskText,
//     completed: boolean,
//   };
//   // Push Task To Array Of Tasks
//   arrayOfTasks.push(task);
//   // Add Tasks To Local Storage
//   addDataToLocalStorageFrom(arrayOfTasks);
// }
//
// function addElementsToPageFrom(arrayOfTasks) {
//   // Empty Tasks Div
//   checkbox.innerHTML = "";
//   let i = 0;
//   // Looping On Array Of Tasks
//   arrayOfTasks.forEach((task) => {
//     // Create Main Div
//     i++;
//     let input = document.createElement("input");
//     let label = document.createElement("label");
//     let div = document.createElement("div");
//     input.setAttribute("id", i);
//     input.setAttribute("type", "checkbox");
//     input.setAttribute("name", "check");
//     label.setAttribute("for", i);
//     label.appendChild(document.createTextNode(task.title));
//     div.appendChild(input);
//     div.appendChild(label);
//     div.classList.add(i);
//     // Check If Task is Done
//     if (task.completed) {
//       input.checked = true;
//     }
//     // Add Task Div To Tasks Container
//     checkbox.appendChild(div);
//   });
// }
//
// function addDataToLocalStorageFrom(arrayOfTasks) {
//   window.localStorage.setItem("tasks", JSON.stringify(arrayOfTasks));
// }
//
// function getDataFromLocalStorage() {
//   let data = window.localStorage.getItem("tasks");
//   let tasks = JSON.parse(data);
//   addElementsToPageFrom(tasks);
// }
