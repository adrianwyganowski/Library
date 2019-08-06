const NavbarMobile = (function() {
    'use strict';
    var DOM ={
        navbarMobileIsOn: false,
        navbar : document.getElementsByClassName('navigation')[0],
        container : document.getElementsByClassName('container')[0],
        hamburgerButton : document.getElementsByClassName('hamburgerButton')[0],
        navExitButton : document.getElementsByClassName('navigation__list--exitButton')[0],
    };
    (function(){
        if (screen.width < 900){
            DOM.navbarMobileIsOn = true;
        }
        checkSizeOfWindow();
    }());
    function eventCheckSizeOfWindow(){
        window.addEventListener('resize',checkSizeOfWindow);
    }
    function checkSizeOfWindow(){
        if (screen.width < 900 && DOM.navbarMobileIsOn === true){
            addEventListners();
            DOM.navbarMobileIsOn = false;
            DOM.navbar.style.width = '0';
            DOM.navbar.style.height = '100%';
            console.log('tutaj');
        }
        else if (screen.width > 900 && DOM.navbarMobileIsOn === false) {
            removeEventListners();
            DOM.navbarMobileIsOn = true;
            DOM.navbar.style.width = '100%';
            DOM.navbar.style.height = '4rem';
            DOM.container.style.marginLeft = '0';
        }
    }
    function addEventListners(){
       DOM.hamburgerButton.addEventListener("click", openMenu);
       DOM.navExitButton.addEventListener("click", closeMenu);
   }
   function removeEventListners(){
        DOM.hamburgerButton.removeEventListener("click", openMenu);
        DOM.navExitButton.removeEventListener("click", closeMenu);
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
        eventCheckSizeOfWindow();
    }
    return {
       init: init,
    };
}());