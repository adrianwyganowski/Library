const Login =(function (){
    "use strict";
    var DOM = {
        email :  document.getElementsByClassName('formRegister__label--email')[0],
        password : document.getElementsByClassName('formRegister__label--password')[0],
        passwordToMatch : document.getElementsByClassName('formRegister__label--passwordToMatch')[0],
        submitButton : document.getElementsByClassName('formRegister_button')[0]
    }
    function init(){
        //sth
    }
    return{
        init:init
    };
}()); 
Login.init();