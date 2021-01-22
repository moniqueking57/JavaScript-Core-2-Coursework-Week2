function listOfColours(colours) {
  let content = document.querySelector("#content");
  let select = document.createElement("select");
  let pea = document.createElement("h1");
  colours.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    select.appendChild(option);
select.addEventListener("click", event =>{
      event.preventDefault();
      console.log(event.target.value);
      if(event.target.value === element){
       pea.innerHTML = `you have selected: ${element}`
   
      }
    
    })

  })
content.appendChild(pea);
  content.appendChild(select);
     
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);

// <select name="cars" id="cars">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>


// function todoList(happyDays) {
//   let content = document.querySelector("#content");
//   let ul = document.createElement("ul");
//   happyDays.forEach(element => {
//     let li = document.createElement('li');
//     li.innerText = element.todo;
//     li.addEventListener("click", event =>{
//       event.preventDefault();
//       if(li.style.textDecoration === "line-through"){
//         li.style.textDecoration = "none"
//       } else {
//         li.style.textDecoration = "line-through"; 
//       }
//     })
//       ul.appendChild(li);
// })
//   content.appendChild(ul); 
//   }