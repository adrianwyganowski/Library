MYAPP.CreateUser = (function(){
    "use strict"
    let idNumber = 1;
    function createUser(email, password) {
        let obj = {
            id : idNumber++,
            email : email,
            password : password,
            status : 'normal'
        }
        sessionStorage.setItem('id',obj.id);
        sessionStorage.setItem('email',obj.email);
        sessionStorage.setItem('password',obj.password);
        sessionStorage.setItem('status',obj.status);
        console.log(obj);
        MYAPP.Db.checkSessionStorage();
    }
    // when i learn how to do proper promises this module should send whole information about this usert to session storage
    return{
        createUser : createUser
    }
}());
