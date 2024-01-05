var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var todoTable = document.getElementById("todoTable");
var serialNumber = 1;

function inputLength() {
  return input.value.trim().length;
}

function addTask() {
  if (inputLength() > 0) {
    var row = todoTable.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.textContent = serialNumber++;
    cell2.textContent = input.value.trim();

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function () {
      row.parentNode.removeChild(row);
    });

    cell3.appendChild(deleteButton);

    input.value = "";
  }
}

function addListAfterClick() {
  addTask();
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.which === 13) {
    addTask();
  }
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// var enterButton = document.getElementById("enter");
// var input = document.getElementById("userInput");
// var ul = document.querySelector("ul");
// var item = document.getElementsByTagName("li");

// function inputLength() {
//   return input.value.length;
// }

// function listLength() {
//   return item.length;
// }

// function createListElement() {
//   var li = document.createElement("li"); // creates an element "li"
//   li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
//   ul.appendChild(li); //adds li to ul
//   input.value = ""; //Reset text input field

//   function crossOut() {
//     li.classList.toggle("done");
//   }

//   li.addEventListener("click", crossOut);

//   var dBtn = document.createElement("button");
//   dBtn.appendChild(document.createTextNode("X"));
//   li.appendChild(dBtn);
//   dBtn.addEventListener("click", deleteListItem);

//   function deleteListItem() {
//     li.classList.add("delete");
//   }
// }

// function addListAfterClick() {
//   if (inputLength() > 0) {
//     createListElement();
//   }
// }

// function addListAfterKeypress(event) {
//   if (inputLength() > 0 && event.which === 13) {
//     createListElement();
//   }
// }

// enterButton.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);
