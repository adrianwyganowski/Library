"use strict"
MYAPP.Cart = (function() {

    function buttonMutationObserver(){
        if (document.getElementsByClassName('mainPage__book').length === 0)
        {
            return;
        }
        const target = document.getElementsByClassName('mainPage__book')[0]
        const config = { attributes: true, childList: true, subtree: true };
        const observer = new MutationObserver(buttonEvent);
        observer.observe(target,config);
    }
    function buttonEvent(){
        const button = document.getElementsByClassName('specificBook__information--buyButton')[0];
        button.addEventListener('click',purchaseBook);
    }
    function checkIfCartExist(){
        if (sessionStorage.getItem('cart') !== null){
            const result = sessionStorage.getItem('cart')
            return JSON.parse(result);
        }
        else{
            return [];
        }
    }
    function purchaseBook(){
        if (sessionStorage.getItem('logged') !== null){
            const bookISBN = sessionStorage.getItem('isbn');
            const cart = checkIfCartExist();
            const cartWithPurchasedBook = `${cart}${bookISBN},`;
            sessionStorage.setItem('cart', JSON.stringify(cartWithPurchasedBook));
            howManyItemsInCart();
        }
       else{
           alert('Firstly you need login to buy book')
       }
    }
    function howManyItemsInCart(){
        const cart =  JSON.parse(sessionStorage.getItem('cart'));
        if(cart !== null){
            const cartArray = cart.split(','); 
            const cartArrayLength = cartArray.length - 1  // to fix added one because of ',' 
            const cartInMenu = document.getElementById('cartMenu');
            cartInMenu.innerHTML = `Cart (${cartArrayLength})`;
        }
    }
    function init(){
        buttonMutationObserver();
        howManyItemsInCart();
    }
    return {
        init :init,
    };
}());
MYAPP.Cart.init();