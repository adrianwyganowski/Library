MYAPP.Login =(function() {
    "use strict"
    let DOM = {
        email :  document.getElementsByClassName('formLogin__label--email')[0],
        password : document.getElementsByClassName('formLogin__label--password')[0],
        submitButton : document.getElementsByClassName('formLogin_button')[0]
    }
    function eventSubmitButton(){
        DOM.submitButton.addEventListener('click',checkDbToLogin);
    }
    function checkDbToLogin(){
        let emailToFind = DOM.email.value;
        console.log('tutaj');
        console.log(MYAPP.Db.dbLength());
        let passwordToFind = DOM.email.value; 
    }

    function init(){
        eventSubmitButton();
    }
    return{
        init:init
    };
}()); 
MYAPP.Login.init();