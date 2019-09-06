"use strict";
MYAPP.DisplayBooks = (function () {
    let link = 'https://www.googleapis.com/books/v1/volumes?q=';
    let key = '&AIzaSyDHcMuGxU4GazERRB-JIXDJjMm40qXt644';
    async function displayBooks(books){ // should use flag because with generes it send multiple request and only one is enough
        for (let i = 0; i < books.length;i++)
        {
            let reuqest = link + books[i] + key;
            let response = await fetch(reuqest);
            let obj = await response.json();
            for (let j = 0; j < obj.totalItems; j++){
                let div = document.createElement('div');
                div.className = 'bookThumbnail';
                div.addEventListener('click',function(){
                    sessionStorage.setItem('isbn',`${obj.items[j].volumeInfo.industryIdentifiers[0].identifier}`);
                    window.open('book.html','_self') ;
                })
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
                console.log(obj);
            }
        }
    }
    function  displayGeneres(generes){
        const length = generes.length;
        for (let i = 0; i < length; i++){
            let a = document.createElement('a');
            a.className = 'mainPageAside__generes--link';
            a.href = '#';
            a.innerHTML = `${generes[i]} `;
            a.addEventListener('click',function(){
                sessionStorage.setItem('genere',generes[i]);
                window.open('genere.html','_self') ;
            })
            document.getElementsByClassName('mainPageAside__generes')[0].appendChild(a);
        } 
    }
    function booksForIndex(books) {
        displayBooks(books);
    }
    function generesForIndex(generes){
        displayGeneres(generes);
    }
    return{
        booksForIndex:booksForIndex,
        generesForIndex:generesForIndex
    };
}());
if(sessionStorage.getItem('genere') !== null){
    MYAPP.DisplayBooks.booksForIndex([`subject:${sessionStorage.getItem('genere')}`])
    document.getElementsByClassName('mainPageMain__header--text')[0].innerHTML = `${sessionStorage.getItem('genere')}:`;
    sessionStorage.removeItem('genere');
}
else{
    MYAPP.DisplayBooks.booksForIndex(['isbn:0141923474','isbn:0316769177','isbn:1580493939','isbn:0684865130','isbn:1775412490','isbn:0393239195','isbn:1101658053','isbn:9781407021010','isbn=0575086254']);
}
MYAPP.DisplayBooks.generesForIndex(['Art','Biography','Business','Classics','Fantasy','Fiction','History','Horror','Music','Mystery','Poetry','Psychology','Romance','Sport','Thriller','Travel'])