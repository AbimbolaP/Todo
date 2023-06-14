function deleteTodo(eventObject) {
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode.parentNode;
  todoItem.remove();
}
 
function addListenersToDeleteButtons() {
  // select all the buttons with .delete__btn class.
  //remember querySelectorAll return an array (NodeList)
  // only the last element in the array is new. every other element has been existing before;
  const buttonCollection = document.querySelectorAll(".delete__btn");
  // select the last element in the array;
  const lastButton = buttonCollection[buttonCollection.length - 1];
  lastButton.addEventListener("click", deleteTodo);
}
function editTodo(eventObject){
  const buttonClicked = eventObject.target;
  const todoItem = buttonClicked.parentNode;
  const span = todoItem.previousElementSibling;
  const input = document.getElementById("todo__input");
  const save = document.getElementById("add");
  input.value = span.textContent;
  save.textContent = "Save"
}

function addListenersToEditButtons() {
  const buttonCollection = document.querySelectorAll(".edit__btn");
  // select the last element in the array;
  const lastButton = buttonCollection[buttonCollection.length - 1];
  lastButton.addEventListener("click", editTodo);

}

function showTodoOnTheScreen(todo) {
  const listOfTodo = document.querySelector("#todo__list");
  const li = document.createElement("li");
  li.classList.add("todo__section--todoItem");

  li.innerHTML = `
  <input class="todo__checkbox" type="checkbox" />
  <span class="todo__text"> ${todo} </span>
  <div class="todo__actions--wrapper">
    <button id="edit_btn" class="todo__actions edit__btn">
      edit
    </button>
    <button id="delete_btn" class="todo__actions delete__btn">
      delete
    </button>
  </div>
`;

  listOfTodo.appendChild(li);
  addListenersToDeleteButtons();
  addListenersToEditButtons();
}

function todoFormSumbitHandler(eventObject ) {
  eventObject.preventDefault();
  const inputField = document.querySelector("#todo__input");
  const todoValue = inputField.value;
  showTodoOnTheScreen(todoValue);
  inputField.value = ""
}

function clearForm() {
const inputField = document.querySelector("#todo__input");
inputField.value = "";
}

const todoForm = document.getElementById("form");
todoForm.addEventListener("submit", todoFormSumbitHandler);

const clearButton = document.querySelector("#Clear");
clearButton.addEventListener("click", clearForm)