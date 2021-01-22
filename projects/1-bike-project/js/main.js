 function buttonColors() {
  let content = document.querySelector("#content");
  let boringButton = document.getElementById("blueBtn");
  let boringButton2 = document.getElementById("orangeBtn");
  let boringButton3 = document.getElementById("greenBtn");
  let jumboCrap = document.getElementsByClassName("jumbotron");
  let donateShit = document.getElementById("donateShit");
  let meedaxa = document.getElementById("meedaxa");
  boringButton.addEventListener("click", event => {
        jumboCrap[0].style.backgroundColor = "#588fbd";
        donateShit.style.backgroundColor = `#ffa500`;
        meedaxa.style.backgroundColor = `black`;
        meedaxa.style.color = `white`;
        
  })
boringButton2.addEventListener("click", event =>{
    jumboCrap[0].style.backgroundColor = `#f0ad4e`;
        donateShit.style.backgroundColor = `#5751fd`;
        meedaxa.style.backgroundColor = `#31b0d5` ;
        meedaxa.style.color = `white`;
})

boringButton3.addEventListener("click", event =>{
    jumboCrap[0].style.backgroundColor = `#87ca8a`;
        donateShit.style.backgroundColor = `black`;
        meedaxa.style.backgroundColor = `#8c9c08` ;
})

 }
 buttonColors();
