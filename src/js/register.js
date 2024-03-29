"use strict";
MYAPP.Register = (function() {

    var DOM = {
        email :  document.getElementsByClassName('formRegister__label--email')[0],
        password : document.getElementsByClassName('formRegister__label--password')[0],
        passwordToMatch : document.getElementsByClassName('formRegister__label--passwordToMatch')[0],
        submitButton : document.getElementsByClassName('formRegister_button')[0],
    }
    function eventSubmitButton(){
        DOM.submitButton.addEventListener('click',fetchDataToValidAndSend);
    }
    function fetchDataToValidAndSend(){
        sendUserToDb(validEmail(DOM.email.value),validPassword(DOM.password.value, DOM.passwordToMatch.value));
    }
    function validEmail(email){
        let check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(check)){
            let result = checkIfUnique(email,'This email address already exists please choose a different one')
            return result;         
        }
        else{
            alert('Incorrect email address format');
        }
    }
    function validPassword(password, passwordToMatch){
        if(password === passwordToMatch){
            let check=  /^[A-Za-z]\w{7,14}$/;
            if(password.match(check)){
                
                return password;
            }                            
            else{
                alert('A password must contain at least 7 characters but not more than 17, and conatain at least one letter');
                DOM.password.value = ''; 
                DOM.passwordToMatch.value = '';  
            }
        }
        else{
            alert("These passwords don't match. Please try again")
            DOM.password.value = ''; 
            DOM.passwordToMatch.value = '';
        }
    }
    function sendUserToDb(emailPromise,passwordPromise){
        return Promise.all ([emailPromise,passwordPromise])
        .then(function(values){
            if(values[0] === null || values[1] === undefined  || null){
                return;
            }
            else{
                MYAPP.CreateUser.createUser(values[0],values[1]);
                alert('Your account has been created');
            }
        })
    }
    function checkIfUnique(value, msg)
    {
        let dbAccess = MYAPP.Db.dbAccess();
        let dbLength = MYAPP.Db.dbLength();
        if(dbLength >= 1){  
            for (let i = 0; i < dbLength; i++){
                if (value === dbAccess[i][1]){
                    alert(msg);
                    return null;
                }
            }
        }
        return value;
    }
    function init() {
        eventSubmitButton()
    }
    return{
        init:init
    };
}());
MYAPP.Register.init(); 