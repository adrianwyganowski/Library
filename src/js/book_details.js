"use strict";
MYAPP.BookDetails = (function () {
    let link = 'https://www.googleapis.com/books/v1/volumes?q=';
    let key = '&AIzaSyDHcMuGxU4GazERRB-JIXDJjMm40qXt644';
    async function displayBook(book){
        let reuqest = link + book + key;
        let response = await fetch(reuqest);
        let obj = await response.json();
        let div = document.createElement('div');
        div.className = 'specificBook';
        div.innerHTML = 
        `<div class="book__cover"> 
            <img src='${obj.items[0].volumeInfo.imageLinks.thumbnail}' alt='Thumbnail photo of "${obj.items[0].volumeInfo.title}"'>
        </div>
        <div>
            <div class="specificBook__name">
                ${obj.items[0].volumeInfo.title}
            </div>
            <div class='specificBook__author'>
                ${obj.items[0].volumeInfo.authors[0]}
            </div>
            <div class='specificBook__description'>
                ${obj.items[0].volumeInfo.description} 
            </div>
            <div class='specificBook__price'>
                ${obj.items[0].volumeInfo.pageCount / 5} 
            </div>
        </div>`
        document.getElementsByClassName('mainPage__books')[0].appendChild(div);
    }
    function bookForBookDetails(book){
        displayBook(book);
    }
    return{
        bookForBookDetails:bookForBookDetails
    }
}());
if(sessionStorage.getItem('isbn') !== null){
    MYAPP.BookDetails.bookForBookDetails(`isbn:${sessionStorage.getItem('isbn')}`)  
} 