let btnHeader = document.querySelector('.header-btn');
let sectionProducts = document.getElementById('products');
let order = document.getElementById('order');
let linkCatalog = document.getElementById('catalog');
let linkBooking = document.getElementById('booking');
let btnCard = document.querySelectorAll('.card-btn');
let products = document.querySelectorAll('.card');
let cardTitle = document.querySelectorAll('.card-desc-title');
let textArea  = document.getElementById('textarea');
console.log(products);

   for (let i = 0; i < products.length; i++) {
       btnCard[i].addEventListener('click', () => {
           scrollingBooking ();
           textArea.value = cardTitle[i].textContent;
           console.log(textArea);
           console.log(cardTitle[i].textContent);
       })

   }




function scrollingProducts () {
    sectionProducts.scrollIntoView(
        {
            behavior: 'smooth',
        }
    )
}
function scrollingBooking () {
    order.scrollIntoView(
        {
            behavior: 'smooth',
        }
    )
}

btnHeader.addEventListener('click', (e) => {
    scrollingProducts ();
});
linkCatalog.addEventListener('click', (e) => {
    scrollingProducts ();
});
linkBooking.addEventListener('click', (e) => {
    scrollingBooking ();
});



IMask(
    document.getElementById('phone'),
    {
        mask: '+{7} (000) 000-00-00'
    }
);

