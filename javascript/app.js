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


let contactButton = document.querySelector('.contact-button');
let endcompanyyear = document.querySelector('.endyear');
var thisYear,thisMonth,thisDay;
var openMenu = document.getElementById('openmenu');
var closeMenu = document.getElementById('closemenu');
var dropMenu = document.getElementById('drop-menu');


function navigation() {
  // body...
let menuStatus = localStorage.getItem('menu');
if (menuStatus == undefined) {
 localStorage.setItem('menu' , 0 );
 //alert('menu is down')
 openMenu.style.display = "none";
  closeMenu.style.display = "block";
  dropMenu.style.display = "none"; 
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
	alert('Contact us ');
})