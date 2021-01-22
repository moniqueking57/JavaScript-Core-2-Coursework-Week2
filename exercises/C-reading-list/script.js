function readingList(books) {
    let content = document.querySelector("#content");
    let list = document.createElement("ul");
    let h1 = document.createElement("h1");
    h1.innerText = "Book List";
    content.appendChild(h1);
 books.forEach(element =>{
    let listItem = document.createElement("li");
    let para = document.createElement("p");
    let pics = document.createElement("img")
   para.innerHTML = `${element.title} - ${element.author}`;
   pics.src = element.img;
   listItem.appendChild(para);
   listItem.appendChild(pics);
   if(element.alreadyRead){
     listItem.style.backgroundColor = "green";
   }else{ 
     listItem.style.backgroundColor = "red";
   }
   list.appendChild(listItem);

 
 })
 content.appendChild(list);

}

//   let content = document.querySelector("#content");
//      let header1, header2;
//     arrayOfPeople.forEach(element => {
//         header1 = document.createElement("h1");
//         header2 = document.createElement("h2");
//         header1.innerText = element.name;
//         content.appendChild(header1);
//         header2.innerText = element.job;
//         content.appendChild(header2);
//     });
// }



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    img: "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
    alreadyRead: false
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    img: "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
    alreadyRead: true
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    img: "https://images-na.ssl-images-amazon.com/images/I/51cUVaBWZzL.jpg",
    alreadyRead: true
  }
];

readingList(books);
