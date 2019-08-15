MYAPP.Db = (function () {
    "use strict"
    let db = [ ];
    function checkSessionStorage(){
        if(sessionStorage.length != 1)
        {   // MINUS ONE BECAUSE LIVE SERVER ADDS ONE 
            let indexOfUsers = (sessionStorage.length-1)/4 ; 
            // I added here one because id is not starting from 0 like index does
            for (let i =1; i < (indexOfUsers+1); i++){ 
            let obj = [];
            obj[0] = sessionStorage.getItem(`id${i}`);
            obj[1] = sessionStorage.getItem(`email${i}`);
            obj[2] = sessionStorage.getItem(`password${i}`);
            obj[3] = sessionStorage.getItem(`status${i}`);
            db.push(obj);
            console.log(db);
            }
        }
    }
    function dbLength(){
        return db.length;
    }
    return{
        checkSessionStorage:checkSessionStorage,
        dbLength: dbLength
    };   
}());
MYAPP.Db.checkSessionStorage();