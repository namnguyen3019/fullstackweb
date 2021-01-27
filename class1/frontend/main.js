var allTodoList = document.getElementById("allTodoList");

// Add a new list
window.onload = function () {
  const server = "http://localhost:3000/";
  fetch(server)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .then(console.log("Done fetching"));
};

addToDo = (e) => {
    parentElem = e.parentNode;
  
    var newLi = document.createElement("li");
  
    var newInput = document.createElement("input");
  
    //Submit button
    var submitBtn = document.createElement("button");
    var submitText = document.createTextNode("Submit");
    submitBtn.id = "submitBtn";
    submitBtn.appendChild(submitText);
  
    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelBtn";
    const cancelText = document.createTextNode("Cancel");
    cancelBtn.appendChild(cancelText);
  
    newLi.appendChild(newInput);
    newLi.appendChild(submitBtn);
    newLi.appendChild(cancelBtn);
  
    ulElement = parentElem.getElementsByTagName("ul");
    if (Object.keys(ulElement).length == 0) {
      console.log('Empty')
    } else {
      ulElement[0].insertBefore(newLi, ulElement[0].firstChild);
    }
  
    // Submit new Todo
    submitBtn.addEventListener("click", function (e) {
      target = e.target;
      parent = target.parentNode.parentNode.parentNode;
  
      var newTodoText = document
        .getElementById(parent.id)
        .getElementsByTagName("input")[0].value;
  
      if (newTodoText.trim() !== "") {
        newTodo = document.createTextNode(newTodoText);
        // Append a new to do list
        newLi.appendChild(newTodo);
  
        // Remove input form
        newLi.removeChild(newInput);
        newLi.removeChild(submitBtn);
        newLi.removeChild(cancelBtn);
      } else {
        alert("It is empty string");
      }
    });
  
    // Cancel input a new todo list
  
    cancelBtn.addEventListener("click", function (e) {
      console.log("Remove a new lis");
      ulElement.removeChild(newLi);
    });
  };

addANewList = (e) => {
  var newListTitle = document.getElementById("newList").value;
  var newListId = newListTitle.trim().toLowerCase();

  var newListTitleContent = document.createTextNode(newListTitle);

  // Create a new list
  var newListDiv = document.createElement("div");
  newListDiv.id = newListTitle;

  // Add the title for the new list
  newToDoTitle = document.createElement("h2");
  newToDoTitle.appendChild(newListTitleContent);
  newListDiv.appendChild(newToDoTitle);

  // Add a new "add todo button" to the new list
  var newAddButton = document.createElement("button");
  var newAddButtonContent = document.createTextNode("Add a new Todo");
  newAddButton.onclick = function(){addToDo(this)}
  newAddButton.appendChild(newAddButtonContent);
  newListDiv.appendChild(newAddButton);

  // the list content
  newUl = document.createElement("ul");
  newListDiv.appendChild(newUl);

  // Append new list to all the list
  allTodoList.appendChild(newListDiv);
};

cancelANewList = (e) => {
  document.getElementById("newList").value = "";
};


