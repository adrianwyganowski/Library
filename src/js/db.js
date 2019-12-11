"use strict"
MYAPP.Db = (function () {
    let db = [ ];
    function checkSessionStorage(){
        if(sessionStorage.length != 1)
        {   
            for (let i = 1; i < 100; i++){
                if (sessionStorage.getItem(`email${i}`) !== null)
                {
                    let obj = [];
                    obj[0] = sessionStorage.getItem(`id${i}`);
                    obj[1] = sessionStorage.getItem(`email${i}`);
                    obj[2] = sessionStorage.getItem(`password${i}`);
                    obj[3] = sessionStorage.getItem(`status${i}`);
                    db.push(obj);
                }
            }
        }
    }
    function dbLength(){
        return db.length;
    }
    function dbAccess(){
        return db;
    }
    return{
        checkSessionStorage:checkSessionStorage,
        dbLength: dbLength,
        dbAccess :dbAccess
    };   
}());
MYAPP.Db.checkSessionStorage();

