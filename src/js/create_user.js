MYAPP.CreateUser = (function(){
    "use strict"
    let idNumber = 0;
    function createUser(email, password) {
       
        let obj = {
            id : ++idNumber,
            email : email,
            password : password,
            status : 'normal'
        }
        sessionStorage.setItem(`id${idNumber}`,obj.id);
        sessionStorage.setItem(`email${idNumber}`,obj.email);
        sessionStorage.setItem(`password${idNumber}`,obj.password);
        sessionStorage.setItem(`status${idNumber}`,obj.status);
    }
    return{
        createUser : createUser
    }
}());
