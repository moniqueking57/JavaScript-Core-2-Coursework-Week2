function highlightWords(paragraph, colours) {
  let content = document.querySelector("#content");
  let select = document.createElement("select");
  let pea = document.createElement("h3");
  colours.forEach(element => {
    let option = document.createElement("option");
    option.value = element;
    option.innerText = element;
    select.appendChild(option);
select.addEventListener("click", event =>{
      event.preventDefault();
      console.log(event.target.value);
      if(event.target.value === element){
       pea.innerHTML = `${paragraph}`
        
      }
    
    })

  })
content.appendChild(pea);
  content.appendChild(select);
    
}
 

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);

//   // The paragraph is split to create multiple spans
//   let words = paragraph.split(' ');
//   words.forEach(function(word) {
//      let span = document.createElement('span');
//      let text3 = document.createTextNode(word + ' ');
//      span.appendChild(text3);
//      p.appendChild(span);

//     // A callback function is created to check the value of the select option to be used as a background color to be initiated later by the event listener.
//     let singleSpan = function () {
//        document.getElementsByTagName('select').value;
//        if (select.value !='none') {
//          span.style.backgroundColor = select.value;
//        } else if (select.value = 'none'){
//          span.style.backgroundColor = null;
//        }
//     }

//      // Refers to the callback function when a user clicks on a word.
//      span.addEventListener('click', singleSpan);

//   })
// }