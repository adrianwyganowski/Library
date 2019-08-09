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
    // when i learn how to do proper promises this module should send whole information about this usert to session storage
    return{
        init : createUser
    }
}())