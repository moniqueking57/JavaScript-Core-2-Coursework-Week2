 function buttonColors() {
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

 //task 2
  let subBtn = document.getElementById("entertothemagicland");

 function formValidation() {
    var formInput = document.getElementsByClassName("form-control");
    let numberOfInvalidFields = 0;
     for (let i= 0; i< formInput.length; i++) {
         if (!(formInput[i].value).length > 0){
            numberOfInvalidFields++;
             formInput[i].style.backgroundColor = "#ffb1ad";
         } 
     };

     let email = formInput[0].value
     // email is just a string
     console.log(email);
     if (!email.includes("@")){
         numberOfInvalidFields += 1;
          formInput[0].style.backgroundColor = "#ffb1ad";
     }

     if(numberOfInvalidFields === 0){
         let form = document.getElementById("topsecret");
         form.reset();
            alert("Thank you for filling out the form about your VPN's"); 
     }
 }

//  event that occurs on click of submit with a prevention of refresh
  subBtn.addEventListener("click", function(event){
      event.preventDefault();
      formValidation();
  });

  //random workings:
  //  
     // && !(formInput[0].value).includes("@")