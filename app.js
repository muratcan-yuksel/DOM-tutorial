//get elements from the DOM (getelementbyid, queryselector, etc)
// classList.add to add a class to an element
// classList.remove to remove a class from an element
//appendChild to add an element to the DOM
//removeChild to remove an element from the DOM
//replaceChild to replace an element in the DOM
//setAttribute to set an attribute on an element
//addEventListener to add an event listener to an element
//textContent to set the text content of an element
//createElement to create an element
const title = document.getElementById("title");
console.log(title);

const todoList = document.querySelector("#todos");
console.log(todoList);

const wrapper = document.querySelector(".wrapper");

const elements = document.getElementsByClassName("element");
console.log(elements);
console.log(elements[0].textContent);

document.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("done");
  }
});

const newElement = document.createElement("li");
newElement.classList.add("element");
newElement.textContent = "New Item";

todoList.appendChild(newElement);

const inputField = document.getElementById("input");

const createElement = document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    let newItem = document.createElement("li");
    newItem.classList.add("element");
    newItem.textContent = inputField.value;
    todoList.appendChild(newItem);
    inputField.value = "";
  }
});

//create a remove element function

const removeTitle = document.addEventListener("click", (e) => {
  if (e.target.id === "title") {
    // e.target.remove();
    wrapper.removeChild(title);
  }
});
