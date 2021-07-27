window.onscroll = function() {myStickyLogoNav()};


var navbar = document.getElementById("navbar");
var logo = document.querySelector('.logo-holder');
var sticky = navbar.offsetTop - 200;
var sticky2 = logo.offsetTop;

function myStickyLogoNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")  
 
  } else {
    navbar.classList.remove("sticky");
  }
  // logo sticky
   if (window.pageYOffset >= sticky2) {
    
    logo.classList.add("sticky2")
  } else {
    
    logo.classList.remove("sticky2");
  }
}

let mailBox = document.querySelector('.mail-box');
let btnclosemailBox = document.getElementById('closemailbox');
let contactButton = document.querySelector('.contact-button');
let endcompanyyear = document.querySelector('.endyear');
var thisYear,thisMonth,thisDay;
var openMenu = document.getElementById('openmenu');
var closeMenu = document.getElementById('closemenu');
var dropMenu = document.getElementById('drop-menu');
var blurbody = document.querySelector('.background-image');
var blurbody2 = document.querySelector('.content');
var blurbody3 = document.querySelector('.footer');

window.addEventListener('resize', function(event){
    var newWidth = window.innerWidth;
     if (newWidth >= 800) {
    dropMenu.style.display = "block"; 
  }else{
    navigation(); 
  }
});

function navigation() {
  // body...
let menuStatus = localStorage.getItem('menu');
 var w = window.innerWidth;
if (menuStatus == undefined) {
 localStorage.setItem('menu' , 0 );
 //alert('menu is down')
 openMenu.style.display = "none";
  closeMenu.style.display = "block";
  //dropMenu.style.display = "block"; 
 
  if (w >= 800) {
    dropMenu.style.display = "block"; 
  }
}else{
  if (menuStatus == 1) {
      //alert('menu is up');
      openMenu.style.display = "none";
     closeMenu.style.display = "block";
       dropMenu.style.display = "block";
 
  }else{
    //alert('menu is down');
    openMenu.style.display = "block";
  closeMenu.style.display = "none";
 dropMenu.style.display = "none";

if (w >= 800) {
    dropMenu.style.display = "block"; 
  }
  }
}
}
navigation();

openMenu.addEventListener('click' , () =>{
  localStorage.setItem('menu', 1);
   openMenu.style.display = "none";
     closeMenu.style.display = "block";
     dropMenu.style.display = "block";

})
closeMenu.addEventListener('click' , () =>{
   localStorage.setItem('menu', 0);
   openMenu.style.display = "block";
  closeMenu.style.display = "none";
  dropMenu.style.display = "none";
})

function getdate(){

}
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