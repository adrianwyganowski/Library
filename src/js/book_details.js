"use strict";
MYAPP.BookDetails = (function () {
    const link = 'https://www.googleapis.com/books/v1/volumes?q=';
    const key = '&AIzaSyDHcMuGxU4GazERRB-JIXDJjMm40qXt644';
    
    async function displayBook(book){
        const reuqest = link + book + key;
        const response = await fetch(reuqest);
        const obj = await response.json();
        const author = checkIfAuthorIsNull(obj.items[0].volumeInfo.authors);
        const imgSrc = checkIfImgSrcIsNull(obj.items[0].volumeInfo.imageLinks);
        const title = checkIfDataIsNull(obj.items[0].volumeInfo.title);
        const description = checkIfDataIsNull(obj.items[0].volumeInfo.description);
        const price = checkIfDataIsNull(obj.items[0].volumeInfo.pageCount);
        const div = document.createElement('div');
        div.className = 'specificBook';
        div.innerHTML = 
        `<div class="specificBook__bookCover"> 
            <img src='${imgSrc}' alt='Thumbnail photo of "${title}"'>
        </div>
        <main class='specificBook__information'>
            <div class="specificBook__information--name">
                <h2>${title}</h2>
            </div>
            <div class='specificBook__information--author'>
                <h4>${author}</h4>
            </div>
            <div class='specificBook__information--description'>
                <p>${description}<p> 
            </div>
            <div class='specificBook__information--price'>
                ${Math.floor(price / 5 + 10)} zł
            </div>
            <button class='specificBook__information--buyButton'>
                Purchase
            </button>
        </main>`
        document.getElementsByClassName('mainPage__book')[0].appendChild(div);
        displayRecommendedBooks(author)
    }
    async function displayRecommendedBooks(connection){
        const reuqest = link + connection + key;
        const response = await fetch(reuqest);
        const obj = await response.json();
       
        for (let i = 0; i < 3;i++){
            const div = document.createElement('div');
            div.className = 'recommendedBook'
            div.addEventListener('click', function(){
                sessionStorage.setItem('isbn',`${obj.items[i].volumeInfo.industryIdentifiers[0].identifier}`);
                window.open('book.html','_self') ;
            })
            const author = checkIfAuthorIsNull(obj.items[i].volumeInfo.authors);
            const imgSrc = checkIfImgSrcIsNull(obj.items[i].volumeInfo.imageLinks);
            const title = checkIfDataIsNull(obj.items[i].volumeInfo.title);
            const price = checkIfDataIsNull(obj.items[i].volumeInfo.pageCount);
            div.innerHTML = 
            `<a>
                <img src='${imgSrc}' alt='Thumbnail photo of "${title}"'>
                <div class='bookThumbnail__title'>
                    ${title}
                </div>
                <div class="bookThumbnail__author">
                    ${author}
                </div>
                <div class='bookThumbnail__price'>
                    ${Math.floor(price / 5 + 10)} zł 
                </div>
            </a>`
            document.getElementsByClassName('mainPageAside__generes')[0].appendChild(div);
        }
    }
    function checkIfDataIsNull(data){
        if (typeof data == "undefined"){
            let result = '';
            return result;
        }
        else{
            return data;
        }
    }
    function checkIfImgSrcIsNull(data){
        if (typeof data == "undefined"){
            let result = '';
            return result;
        }
        else{
            return data.thumbnail;
        }
    }
    function checkIfAuthorIsNull(data){
        if (typeof data == "undefined"){
            let result = '';
            return result;
        }
        else{
            return data[0];
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