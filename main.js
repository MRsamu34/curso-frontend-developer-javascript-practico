const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const asideDetail = document.querySelector('.aside-product-detail');
const asideDetailClose = document.querySelector('.aside-product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarIcon.addEventListener('click', toggleCarAside);
asideDetailClose.addEventListener('click', hideAsideDetail);

// Función para esconder el asideDetail o el detalle de un producto, Mirar si el asideDetail está abierto y ponerle un z-index menor, para que no se cierre, pero se muestre detrás
function hideAsideDetail() {
    const isAsideDetailClosed = (asideDetail.classList.contains('inactive'));
    if (!isAsideDetailClosed) {
        asideDetail.classList.add('show-behind')
    }

    asideDetail.classList.add('inactive');
}

const checkView = desktopMenu.classList;
function toggleDesktopMenu() {
    const checkView = desktopMenu.classList;
    const strCheckView = desktopMenu.classList.value;
    const isAsideClosed = (aside.classList.contains('inactive'));
    
    hideAsideDetail();

    checkView.add('show-above')

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

    hideAsideDetail();//escondo el aside product detail

    mobileMenu.classList.add('show-above')//para mostrar el burger menu y así cuando 
    mobileMenu.classList.toggle('inactive');
}
function toggleCarAside() {
    const isMobileMenuClosed = (mobileMenu.classList.contains('inactive'));
    
    hideAsideDetail();
    
    // Añadir la clase inactive al correo que muestra my orders
    isDesktoMenuClosed = checkView.contains('inactive');
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }

    checkView.add('inactive');
    
    aside.classList.toggle('show-above')
    aside.classList.toggle('inactive')
}

function openAsideDetail() {
    asideDetail.classList.remove('inactive')
    checkView.add('inactive');
    aside.classList.add('inactive');
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
productList.push({
    name: 'Plantita',
    price: 50,
    image: 'https://images.pexels.com/photos/15427681/pexels-photo-15427681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Structure',
    price: 1620,
    image: 'https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});
productList.push({
    name: 'Soldadura',
    price: 500,
    image: 'https://images.pexels.com/photos/2381463/pexels-photo-2381463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
});

function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        // product = {name, price, image} -> product.image
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openAsideDetail)
        
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

