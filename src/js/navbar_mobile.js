"use strict";
MYAPP.NavbarMobile = (function() {
 
    const DOM ={
        navbarMobileIsOn: true,
        navbar : document.getElementsByClassName('navigation')[0],
        container : document.getElementsByClassName('container')[0],
        hamburgerButton : document.getElementsByClassName('hamburgerButton')[0],
        navExitButton : document.getElementsByClassName('navigation__list--exitButton')[0],
        searchButton : document.getElementsByClassName('menuSearch__searchButton')[0],
        searchInput : document.getElementsByClassName('menuSearch__searchInput')[0]
    };
    (function(){
        if (window.innerWidth < 900){
            DOM.navbarMobileIsOn = false;
        }
        checkSizeOfWindow();
    }());
    function eventCheckSizeOfWindow(){
        window.addEventListener('resize',checkSizeOfWindow);
        
    }
    function checkSizeOfWindow(){
        if (window.innerWidth < 900 && DOM.navbarMobileIsOn === false){
            addEventListners();
            DOM.navbarMobileIsOn = true;
            DOM.navbar.style.width = '0';
            DOM.navbar.style.height = '100%';
        }
        else if (window.innerWidth > 900 && DOM.navbarMobileIsOn === true) {
            removeEventListners();
            DOM.navbarMobileIsOn = false;
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
    function eventListnerOfSearch() {
        DOM.searchButton.addEventListener('click',search)
        DOM.searchInput.addEventListener('keypress',function(e){
            if (e.keyCode === 13){
                search();
            }
        })
    }
    function search(){
        if(DOM.searchInput.value !== ''){
            window.open('index.html','_self');
            sessionStorage.setItem('search',DOM.searchInput.value);
           
            
        } else{
            console.log('wpisz cos')// alert
        }
    }
    function init() {
        eventCheckSizeOfWindow();
        eventListnerOfSearch()
    }
    return {
       init: init,
    };
}());

MYAPP.NavbarMobile.init();