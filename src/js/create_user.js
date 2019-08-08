const User = (function(){
    "use strict"
    var idNumber = 0;
    function createUser(email, password) {
        var obj = {
            id : idNumber++,
            email : email,
            password : password,
            status : normal
        }

    }
    return{
        createUser : createUser
    }
}())