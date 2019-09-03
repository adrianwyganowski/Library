MYAPP.DisplayBooks = (function () {
    "use strict";
    let link = 'https://www.googleapis.com/books/v1/volumes?q=';
    let key = '&AIzaSyDHcMuGxU4GazERRB-JIXDJjMm40qXt644';
    async function displayBooks(books){
        for (let i = 0; i < books.length;i++)
        {
            let reuqest = link + books[i] + key;
            let response = await fetch(reuqest);
            let obj = await response.json();
            for (let j = 0; j < obj.totalItems; j++){
                let div = document.createElement('div');
                div.className = 'bookThumbnail';
                div.innerHTML =
                `<a href='#'>
                    <img src='${obj.items[j].volumeInfo.imageLinks.thumbnail}' alt='Thumbnail photo of "${obj.items[j].volumeInfo.title}"'>
                    <div class='bookThumbnail__title'>
                        ${obj.items[j].volumeInfo.title}
                    </div>
                    <div bookThumbnail__author>
                        ${obj.items[j].volumeInfo.authors[0]}
                    </div>
                </a>`
                document.getElementsByClassName('mainPage__books')[0].appendChild(div);    
                console.log(obj.totalItems);
                console.log(obj.items[j])
            }
        }
    }
    function init(books) {
        displayBooks(books);
    }
    return{
        init:init
    };
}());
MYAPP.DisplayBooks.init(['isbn:0141923474','isbn:0316769177','isbn:1580493939','isbn:0684865130','isbn:1775412490','isbn:0393239195','isbn:1101658053','isbn:9781407021010','isbn=0575086254']);