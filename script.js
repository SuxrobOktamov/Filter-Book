let form = document.getElementById('form');
let bookName = document.getElementById('bookName');
let bookType = document.getElementById('bookType');
let listGroup = document.querySelector('.list-group');
let button = document.getElementById('button');
let filter = document.getElementById('filter');

let book = [];
let books = [];

form.addEventListener( 'submit', (e)=>{
    e.preventDefault();
    book.push({
        book:bookName.value,
        type:bookType.value,
    });

    books = book.map((item)=>{
        return ` <li class="list-group-item ">${item.book}<span class="badge bg-primary float-end">${item.type}</span></li> `
    });

    bookName.value = '';
    bookType.value = ''
    listGroup.innerHTML = books.join('');

} );

button.addEventListener( 'click', (e)=>{
    
    let diniyType =  book.filter((item)=>{
        return item.type == e.target.textContent;
    });
    if( e.target.textContent == 'All' ){
        diniyType = book;   
    };
    let enter = diniyType.map((item)=>{
        return ` <li class="list-group-item ">${item.book}<span class="badge bg-primary float-end">${item.type}</span></li> `
    });
    listGroup.innerHTML = enter.join('');
} );

filter.addEventListener('keyup', (e)=>{
    let text = e.target.value.toLowerCase();
    
    let arr  = listGroup.getElementsByTagName('li');
    Array.from(arr).forEach( (item)=>{
        let type =  item.firstChild.textContent.toLocaleLowerCase();

        if( type.indexOf(text) == 0 ){

            item.style.display = 'block';
        }else{

            item.style.display = 'none';
        }
    } );

})