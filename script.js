
let form;
let todoListWrapper;
let todoInputField;


//This for adding todos
function showTodoItem(todo) {
    let li = document.createElement('li');
    li.innerHTML = `      <div>
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
  </div>`

  li.classList.add("todo__section--todoItem")
    

  todoListWrapper.appendChild(li);
}

//This is to submit and show todos and also clear input field
function todoFormSubmit(event) {
  event.preventDefault();

  const todoValue = todoInputField.value;
  todoInputField.value = " "

  showTodoItem(todoValue);
}

//This is to set all events rolling
function setup() {
  form = document.querySelector("#form");
  todoListWrapper = document.querySelector("#todo__list");
  todoInputField = document.querySelector("#todo__input");

  form.addEventListener("submit", todoFormSubmit);
}

setup();
