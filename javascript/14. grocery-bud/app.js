// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** FUNCTIONS **********
// ****** SETUP ITEMS **********
const setupItems = () => {
  const items = getLocalStorage();
  console.log(items);
  if (items.length > 0) {
    items.forEach(item => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  }
};

const createListItem = (id, value) => {
  const element = document.createElement("article");
  // add class
  element.classList.add("grocery-item");
  // add id
  const attr = document.createAttribute("data-id");
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<p class="title">${value}</p>
            <div class="btn-container">
              <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>`;

  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);
  // append child
  list.appendChild(element);
};

// clear items
const clearItems = () => {
  const items = document.querySelectorAll(".grocery-item");

  if (items.length > 0) {
    items.forEach(item => {
      list.removeChild(item);
    });
  }
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  localStorage.removeItem("list");
};

// submit form
const addItem = e => {
  e.preventDefault();
  /* console.log(grocery.value); */
  const { value } = grocery;
  /* if (!value) {
    console.log("value is falsy");
  } */

  const id = new Date().getTime().toString();
  /* console.log(id); */
  if (value && !editFlag) {
    createListItem(id, value);
    // display alert
    displayAlert("item added to the list", "success");
    // show container
    container.classList.add("show-container");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to defalut
    setBackToDefault();
  } else if (value && editFlag) {
    /* console.log("editing"); */
    editElement.innerHTML = value;
    displayAlert("value changed", "success");
    editLocalStorage(editID, value);
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
};

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);

/* const deleteBtn = document.querySelector(".delete-btn");
console.log(deleteBtn);
 */

// display alert
const displayAlert = (text, action) => {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};

// delete function
const deleteItem = e => {
  /* console.log("delete item"); */
  const element = e.currentTarget.parentElement.parentElement;
  const { id } = element.dataset;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
};
// edit function
const editItem = e => {
  /* console.log("edit item"); */
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  /* console.log(grocery);
  console.log(editElement); */
  grocery.value = editElement.innerHTML;
  /* console.log(grocery); */
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = "edit";
};

// set back to default
const setBackToDefault = () => {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
};

// ****** LOCAL STORAGE **********
const addToLocalStorage = (id, value) => {
  const grocery = { id, value };
  /* console.log(grocery); */

  const items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  items.push(grocery);
  console.log(items);
  localStorage.setItem("list", JSON.stringify(items));
  /* console.log("added to local storage"); */
};

const removeFromLocalStorage = id => {
  /* console.log("remove to local storage"); */
  let items = getLocalStorage();

  items = items.filter(item => {
    if (item.id !== id) return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
};

const editLocalStorage = (id, value) => {
  let items = getLocalStorage();
  items = items.map(item => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
};
const getLocalStorage = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};
// localStorage API
// setItem
// getItem
// removeItem
// save as strings
/* localStorage.setItem("orange", JSON.stringify(["item", "item2"]));
const orange = JSON.parse(localStorage.getItem("orange"));
localStorage.removeItem("orange");
console.log(orange); */
