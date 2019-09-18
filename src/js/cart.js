"use strict"
MYAPP.Cart = (function() {

    function buttonMutationObserver(){
        
        const target = document.getElementsByClassName('mainPage__book')[0];
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(buttonEvent);
        observer.observe(target,config);
    }
    function buttonEvent(){
        const button = document.getElementsByClassName('specificBook__information--buyButton')[0];
        button.addEventListener('click',purchaseBook);
    }
    function purchaseBook(){
        const bookISBN = sessionStorage.getItem('isbn');
        console.log(bookISBN);
    }
    function init(){
        buttonMutationObserver();
    }
    return {
        init :init,
    };
}());
MYAPP.Cart.init();