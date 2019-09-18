"use strict"
MYAPP.CreateUser = (function(){
   
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
        MYAPP.Db.checkSessionStorage();
        MYAPP.Db.dbAccess;
    }
    return{
        createUser : createUser
    }
}());
