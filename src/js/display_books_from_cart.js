"use strict";
MYAPP.DisplayBooksFromCart = (function () {
    const link = 'https://www.googleapis.com/books/v1/volumes?q=';
    const key = '&AIzaSyCOt09FH6EqStWDf8clFFIHllXS6ORtR2E';
    async function displayBooksFromCart(books){ 
        for (let i = 0; i < books.length;i++)
        {
            const reuqest = link + books[i] + key; 
            const response = await fetch(reuqest);
            const obj = await response.json();
            for (let j = 0; j < obj.totalItems; j++){
                const div = document.createElement('div');
                const author = checkIfAuthorIsNull(obj.items[j].volumeInfo.authors);
                const imgSrc = checkIfImgSrcIsNull(obj.items[j].volumeInfo.imageLinks);
                const title = checkIfDataIsNull(obj.items[j].volumeInfo.title);
                const price = checkIfDataIsNull(obj.items[j].volumeInfo.pageCount);
                div.className = 'bookThumbnail';
                div.addEventListener('click',function(){
                    sessionStorage.setItem('isbn',`${obj.items[j].volumeInfo.industryIdentifiers[0].identifier}`);
                    window.open('book.html','_self') ;
                })
                div.innerHTML =
                `<a href='#'>
                    <div>
                        <img src='${imgSrc}' alt='Thumbnail photo of "${title}"'>
                    </div>
                    <div class="dataAboutBook">
                        <div class='titleAndAuthor'>
                            <div class='titleAndAuthor__title'>
                                ${title}
                            </div>
                            <div class='titleAndAuthor__author'>
                                ${author}
                            </div>
                        </div>
                        <div>
                            ${Math.floor(price / 5 + 10)} zł
                        </div>
                    </div>
                </a>`
                document.getElementsByClassName('mainPage__booksFromCart')[0].appendChild(div);  
            }
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
    function booksForCart(books)
    {
        displayBooksFromCart(books);
    }
    return{
        booksForCart:booksForCart
    };
}());
if(sessionStorage.getItem('cart') !== null)
{
    const cart =  JSON.parse(sessionStorage.getItem('cart'));
    if(cart !== null){
        const cartArray = cart.split(','); 
        let editedArray =  cartArray.map(x => `isbn:${x}`);
        editedArray.pop() // because "," makes empty object in array
        MYAPP.DisplayBooksFromCart.booksForCart(editedArray)
    }
}
