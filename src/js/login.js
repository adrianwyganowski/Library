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
        let database = MYAPP.Db.dbAccess();
        let users =MYAPP.Db.dbLength();
        let emailToFind = DOM.email.value;
        let passwordToFind = DOM.password.value; 
        for (let i = 0; i < users; i++){
            if (database[i][1] === emailToFind){
                if(database[i][2] === passwordToFind){
                    alert('Logowanie udane')
                    sessionStorage.setItem('logged',(i+1));
                }
                else{
                    alert('Podane dane są nie prawidłowe');
                } 
            }
            else{   
                alert('Podane dane są nie prawidłowe');
            }
        }
    }
    function init(){
        eventSubmitButton();
    }
    return{
        init:init
    };
}()); 
MYAPP.Login.init();