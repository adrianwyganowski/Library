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
        `<div class="specificBook__bookCover"> 
            <img src='${obj.items[0].volumeInfo.imageLinks.thumbnail}' alt='Thumbnail photo of "${obj.items[0].volumeInfo.title}"'>
        </div>
        <main class='specificBook__information'>
            <div class="specificBook__information--name">
                <h2>${obj.items[0].volumeInfo.title}</h2>
            </div>
            <div class='specificBook__information--author'>
                <h4>${obj.items[0].volumeInfo.authors[0]}</h4>
            </div>
            <div class='specificBook__information--description'>
                <p>${obj.items[0].volumeInfo.description}<p> 
            </div>
            <div class='specificBook__information--price'>
                ${obj.items[0].volumeInfo.pageCount / 5} zł
            </div>
        </main>`
        document.getElementsByClassName('mainPage__books')[0].appendChild(div);
        displayRecommendedBooks(obj.items[0].volumeInfo.authors[0]);
    }
    async function displayRecommendedBooks(author){
        let reuqest = link + author + key;
        let response = await fetch(reuqest);
        let obj = await response.json();
       
        for (let i = 0; i < 3;i++){
            let div = document.createElement('div');
            div.className = 'recommendedBook'
            div.addEventListener('click', function(){
                sessionStorage.setItem('isbn',`${obj.items[i].volumeInfo.industryIdentifiers[0].identifier}`);
                window.open('book.html','_self') ;
            })
            div.innerHTML = 
            `<a href='#'>
                <img src='${obj.items[i].volumeInfo.imageLinks.thumbnail}' alt='Thumbnail photo of "${obj.items[i].volumeInfo.title}"'>
                <div class='bookThumbnail__title'>
                    ${obj.items[i].volumeInfo.title}
                </div>
                <div bookThumbnail__author>
                    ${obj.items[i].volumeInfo.authors[0] || obj.items[i].volumeInfo.publisher[0]}
                </div>
            </a>`
            document.getElementsByClassName('mainPageAside__generes')[0].appendChild(div);
        }
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