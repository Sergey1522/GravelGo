let btnHeader = document.querySelector('.header-btn');
let sectionProducts = document.getElementById('products');
let order = document.getElementById('order');
let linkCatalog = document.getElementById('catalog');
let linkBooking = document.getElementById('booking');
let btnCard = document.querySelectorAll('.card-btn');
let products = document.querySelectorAll('.card');
let cardTitle = document.querySelectorAll('.card-desc-title');
let textArea  = document.getElementById('textarea');
let current = document.getElementsByClassName('price-icon')[0];
console.log(current);

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

current.addEventListener('click', (e) => {
    let spanDol = document.getElementsByClassName('dol')[0];
    let spanRub = document.getElementsByClassName('rub')[0];
    spanDol.classList.toggle('active');
    spanRub.classList.toggle('active');
    changCurrency();

});

function changCurrency() {
    let cost = document.querySelectorAll('.cost-price');
    let currency = document.querySelectorAll('.currency');
    let currencyRu = document.querySelectorAll('.currency_ru');
    let dollarRate = 78.51;
    for (let i = 0; i < products.length; i++) {
        ;

        if(!currencyRu[i].classList.toggle('active')) {
            let resRu = +cost[i].textContent * +dollarRate;
            // console.log(+cost[i].textContent)
            cost[i].textContent = Math.round(+resRu);
        }
        if(!currency[i].classList.toggle('active')) {
            let resRu = +cost[i].textContent / +dollarRate;
            console.log(+cost[i].textContent)
            cost[i].textContent = Math.round(+resRu);
        }
        // console.log(cost[i][0].textContent);

    }
    for (let i = 0; i < currencyRu.length; i++) {

    }
}


