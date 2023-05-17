const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);


const checkView = desktopMenu.classList;
function toggleDesktopMenu() {
    const checkView = desktopMenu.classList;
    const strCheckView = desktopMenu.classList.value;
    const isAsideClosed = (aside.classList.contains('inactive'));
    if (!isAsideClosed) {
        aside.classList.add('inactive');
        if (strCheckView.includes('inactive')) {
            checkView.remove('inactive');
            console.log(strCheckView.includes('inactive'));
        }
    } else if (strCheckView.includes('inactive') == false) {
        checkView.add('inactive');
        console.log(strCheckView.includes('inactive'));
    }
    if (strCheckView.includes('inactive')) {
        var toggle = checkView.remove('inactive');
        console.log(strCheckView.includes('inactive'));
    }
}
/*
 Forma muchisisísimo más simple
 */
function toggleMobileMenu() {
    const isAsideClosed = (aside.classList.contains('inactive'));
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside() {
    const isMobileMenuClosed = (mobileMenu.classList.contains('inactive'));

    // Añadir la clase inactive al correo que muestra my orders
    isDesktoMenuClosed = checkView.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive')
}

const productList = [];
 
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});   
productList.push({
    name: 'Pantalla',
    price: 320,
    image: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});   
productList.push({
    name: 'Compu',
    price: 620,
    image: 'https://images.pexels.com/photos/13071305/pexels-photo-13071305.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});   

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
        
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);