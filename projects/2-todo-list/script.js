function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((element) => {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");
    li.classList.add("align-items-center");
    li.innerText = element.task;
    let span = document.createElement("span");
    span.classList.add("badge");
    span.classList.add("bg-primary");
    span.classList.add("rounded-pill");
    let iComplete = document.createElement("i");
    iComplete.classList.add("fa");
    iComplete.classList.add("fa-check");
    iComplete.setAttribute("aria-hidden", "true");
    iComplete.innerHTML = "&nbsp";
    iComplete.addEventListener(
      "click",
      (e) => {
        e.target.parentNode.parentNode.style.textDecoration = "line-through";
      },
      false
    );
    span.appendChild(iComplete);
    let iDelete = document.createElement("i");
    iDelete.classList.add("fa");
    iDelete.classList.add("fa-trash");
    iDelete.setAttribute("aria-hidden", "true");
    iDelete.addEventListener(
      "click",
      (e) => {
        e.target.parentNode.parentNode.parentNode.removeChild(
          e.target.parentNode.parentNode
        );
        // i> span> li >ul.remove child(i span li)
      },
      true
    );
    span.appendChild(iDelete);
    li.appendChild(span);
    list.appendChild(li);
  });
}
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Read a book", completed: true },
];
populateTodoList(todos);