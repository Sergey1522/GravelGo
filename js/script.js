let btnHeader = document.querySelector('.header-btn');
let sectionProducts = document.getElementById('products');
console.log(btnHeader)
btnHeader.addEventListener('click', (e) => {
    sectionProducts.scrollIntoView(
        {
            behavior: 'smooth',
        }
    )
});

IMask(
    document.getElementById('phone'),
    {
        mask: '+{7} (000) 000-00-00'
    }
);

