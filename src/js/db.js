MYAPP.Db = (function () {
    "use strict"
    let db = [ [1,'abc@abc.pl','password123','normal']];
    
    function checkSessionStorage(){
        if(sessionStorage.length != 0)
        {   //HERE I DIVIDED BY 5 BECAUSE I HAVE 4 PARAMETERS OF USER AND ONE ADDITIONAL 
            //ONE FOR LIVE SERVER AFTER DEVELOPMENT SHOULD BE DIVIDED BY 4
            for (let i =0; i < (sessionStorage.length/5); i++){ 
            let obj = [];
            obj[0] = sessionStorage.getItem('id');
            obj[1] = sessionStorage.getItem('email');
            obj[2] = sessionStorage.getItem('password');
            obj[3] = sessionStorage.getItem('status');
            db =  [... obj];
            console.log(db+ ' DB');
            }
        }
    }

    function init(){
        checkSessionStorage();
    }

    return{
        init:init,
        checkSessionStorage:checkSessionStorage
    };   
}());
MYAPP.Db.init();