"use strict";
MYAPP.DisplayBooks = (function () {
    const link = 'https://www.googleapis.com/books/v1/volumes?q=';
    const key = '&AIzaSyDHcMuGxU4GazERRB-JIXDJjMm40qXt644';
    async function displayBooks(books){ 
        for (let i = 0; i <  books.length ;i++)
        {
            const reuqest = link + books[i] + key; 
            const response = await fetch(reuqest);
            const obj = await response.json();
            for (let j = 0; j < obj.items.length; j++){
                console.log(obj);
                const div = document.createElement('div');
                const author = checkIfAuthorIsUndefined(obj.items[j].volumeInfo.authors);
                const imgSrc = checkIfImgSrcIsUndefined(obj.items[j].volumeInfo.imageLinks);
                const title = checkIfDataIsUndefined(obj.items[j].volumeInfo.title);
                const price = checkIfDataIsUndefined(obj.items[j].volumeInfo.pageCount);
                div.className = 'bookThumbnail';
                div.addEventListener('click',function(){
                    sessionStorage.setItem('isbn',`${obj.items[j].volumeInfo.industryIdentifiers[0].identifier}`);
                    window.open('book.html','_self') ;
                })
                div.innerHTML =
                `<a href='#'>
                    <img src='${imgSrc}' alt='Thumbnail photo of "${title}"'>
                    <div class='bookThumbnail__title'>
                        ${title}
                    </div>
                    <div class='bookThumbnail__author'>
                        ${author}
                    </div>
                    <div class='bookThumbnail__price'>
                        ${Math.floor(price / 5 + 10)} zł
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
            a.innerHTML = `${generes[i]} `;
            a.addEventListener('click',function(){
                sessionStorage.setItem('genere',generes[i]);
                window.open('genere.html','_self') ;
            })
            document.getElementsByClassName('mainPageAside__generes')[0].appendChild(a);
        } 
    }
    function checkIfDataIsUndefined(data){
        if (typeof data == "undefined"){
            let result = '';
            return result;
        }
        else{
            return data;
        }
    }
    function checkIfImgSrcIsUndefined(data){
        if (typeof data == "undefined"){
            let result = '';
            return result;
        }
        else{
            return data.thumbnail;
        }
    }
    function checkIfAuthorIsUndefined(data){
        if (typeof data == "undefined"){
            let result = '';
            return result;
        }
        else{
            return data[0];
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
else if (sessionStorage.getItem('search') !== null){
    MYAPP.DisplayBooks.booksForIndex([sessionStorage.getItem('search')]);
    sessionStorage.removeItem('search');
}
else{
     MYAPP.DisplayBooks.booksForIndex(['isbn:0141923474','isbn:0316769177','isbn:1580493939','isbn:0684865130','isbn:0393239195','isbn:1101658053','isbn:9781407021010','isbn:1775412490']);
}
MYAPP.DisplayBooks.generesForIndex(['Art','Biography','Business','Classics','Fantasy','Fiction','History','Horror','Music','Mystery','Poetry','Psychology','Romance','Sport','Thriller','Travel'])