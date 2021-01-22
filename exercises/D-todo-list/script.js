function todoList(happyDays) {
  let content = document.querySelector("#content");
  let ul = document.createElement("ul");
  happyDays.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element.todo;
    li.addEventListener("click", event =>{
      event.preventDefault();
      if(li.style.textDecoration === "line-through"){
        li.style.textDecoration = "none"
      } else {
        li.style.textDecoration = "line-through"; 
      }
    })
      ul.appendChild(li);
})
  content.appendChild(ul); 
  }

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);


// let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];
// function shoppingList(arrayOfFood) {
//   let content = document.querySelector('#content');
//   let shoppingUl = document.createElement('ul');
//   content.appendChild(shoppingUl);
//   arrayOfFood.forEach((object) => {
//   let shopping1 = document.createElement('li');
//     shopping1.innerHTML = object
//     shoppingUl.appendChild(shopping1);
// });
// }
// shoppingList(shopping);


// shoppingList(shopping);
