let mailBox = document.querySelector('.mail-box');
let btnclosemailBox = document.getElementById('closemailbox');
let contactButton = document.querySelector('.contact-button');


contactButton.addEventListener('click' , () =>{
	mailBox.style.display = "block";
  blurbody.style.opacity = "0.1";
   blurbody2.style.opacity = "0.1";
    navbar.style.opacity = "0.1";
     blurbody3.style.opacity = "0.1";
})
btnclosemailBox.addEventListener('click' , () =>{
  mailBox.style.display = "none";
  blurbody.style.opacity = "1";
   blurbody2.style.opacity = "1";
    navbar.style.opacity = "1";
     blurbody3.style.opacity = "1";
})