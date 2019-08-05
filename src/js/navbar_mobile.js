const NavbarMobile = (function() {
    'use strict';
    var DOM ={
        navbar : document.getElementsByClassName('navigation')[0],
        container : document.getElementsByClassName('container')[0],
        hamburgerButton : document.getElementsByClassName('hamburgerButton')[0],
        navExitButton : document.getElementsByClassName('navigation__list--exitButton')[0]
    };
  //  const navbarDOM = document.getElementsByClassName('navigation')[0];
   // const containerDOM = document.getElementsByClassName('container')[0]; 
  /* function cachDOM(){
       DOM.navbar = document.getElementsByClassName('navigation')[0];
       DOM.container = document.getElementsByClassName('container')[0];
       DOM.hamburgerButton = document.getElementsByClassName('hamburgerButton')[0];
       DOM.navExitButton = document.getElementsByClassName('navigation__list--exitButton')[0]; // to jest zmienna czy funkcja 
   } */
   function addEventListners(){
       DOM.hamburgerButton.addEventListener("click", openMenu);
       DOM.navExitButton.addEventListener("click", closeMenu);
      
   }
   function openMenu(){
        DOM.navbar.style.width = '10rem';
        DOM.container.style.marginLeft = '10rem';
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"; // to zaraz zobaczymy 
        console.log('open');
   }
   function closeMenu(){
        DOM.navbar.style.width = '0rem';
        DOM.container.style.marginLeft = '0rem';
        document.body.style.backgroundColor = "rgba(0,0,0,1)"; // to zaraz zobaczymy i walidacje trzeba bedzie zrobic
        console.log('close');
    }
   function init() {
       // cachDOM();
        addEventListners();
   }
   return {
       init: init,
   };
}());