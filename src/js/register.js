MYAPP.Register = (function() {
    "use strict";
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
        sendPasswordToDb(validEmail(DOM.email.value),validPassword(DOM.password.value, DOM.passwordToMatch.value));
    }
    function validEmail(email){
        let check = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(check)){
            let result = checkIfUnique(email,'Ten email został już użyty.Proszę użyć innego.')
            return result;         
        }
        else{
            alert('Niewłaściwy Email');
        }
    }
    function validPassword(password, passwordToMatch){
        if(password === passwordToMatch){
            let check=  /^[A-Za-z]\w{7,14}$/;
            if(password.match(check)){
                
                return password;
            }                            
            else{
                alert('Hasło musi składać się przynajmniej z 7 znaków ale nie więcej niż 16. Na hasło składać się mogą litery oraz liczby ale pierwszym znakiem musi byc litera');
                DOM.password.value = ''; 
                DOM.passwordToMatch.value = '';   // here i should do break case to check what is wrong with password for e.g. if password has less than 7 letters give altert like "your password should have more than 7 letters"
            }
        }
        else{
            alert('Hasła sie nie zgadzają')
            DOM.password.value = ''; 
            DOM.passwordToMatch.value = '';
        }
    }
    function sendPasswordToDb(emailPromise,passwordPromise){
        return Promise.all ([emailPromise,passwordPromise])
        .then(function(values){
            if(values[0] === null || values[1] === null){
                return;
            }
            MYAPP.CreateUser.createUser(values[0],values[1]);
            alert('Konto zostało założone');

        })
    }
    function checkIfUnique(value, msg)
    {
        let dbAccess = MYAPP.Db.dbAccess();
        let dbLength = MYAPP.Db.dbLength();
        if(dbLength >= 1){   
            for (let i = 0; i <= dbLength; i++){
                if (value === dbAccess[i][1]){
                    alert(msg);
                    return null;
                }
            }
            console.log('dlugosc wiecej niz jeden');
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