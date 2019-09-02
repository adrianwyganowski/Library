MYAPP.DisplayBooks = (function () {
    "use strict";
    let link = 'https://www.googleapis.com/books/v1/volumes?q='
    let key = '&AIzaSyDHcMuGxU4GazERRB-JIXDJjMm40qXt644'
    async function displayBooks(books){
        for (let i = 0; i < books.length;i++)
        {
            let reuqest = link + books[i] + key;
            let response = await fetch(reuqest);
            let obj = await response.json();
            console.log(obj.items[0]);
        }
    }
    function init(books) {
        displayBooks(books);
    }
    return{
        init:init
    };
}());
MYAPP.DisplayBooks.init(['isbn:0141923474']);