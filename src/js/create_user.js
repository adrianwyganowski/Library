"use strict"
MYAPP.CreateUser = (function(){

    function createUser(email, password) {

        let idNumber = 0;
        for (let i = 1; i < 100; i++){
            if (sessionStorage.getItem(`id${i}`) !== null){
                idNumber = i;
            }
        }
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
