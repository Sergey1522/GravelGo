let btnHeader = document.querySelector('.header-btn');
let sectionProducts = document.getElementById('products');
let order = document.getElementById('order');
let linkCatalog = document.getElementById('catalog');
let linkBooking = document.getElementById('booking');

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

