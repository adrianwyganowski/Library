const NavbarMobile = (function() {
    'use strict';
    var DOM ={
        navbar : document.getElementsByClassName('navigation')[0],
        container : document.getElementsByClassName('container')[0],
        hamburgerButton : document.getElementsByClassName('hamburgerButton')[0],
        navExitButton : document.getElementsByClassName('navigation__list--exitButton')[0],
    };
   function addEventListners(){
       DOM.hamburgerButton.addEventListener("click", openMenu);
       DOM.navExitButton.addEventListener("click", closeMenu);
   }
   function openMenu(){
        DOM.navbar.style.width = '10rem';
        DOM.container.style.marginLeft = '10rem';
           
    }
   function closeMenu(){
        DOM.navbar.style.width = '0rem';
        DOM.container.style.marginLeft = '0rem';
    }
   function init() {
        addEventListners();
   }
   return {
       init: init,
   };
}());