const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);


function toggleDesktopMenu() {
    let checkView = desktopMenu.classList;
    let strCheckView = desktopMenu.classList.value;
    if (strCheckView.includes('inactive')) {
        var toggle = checkView.remove('inactive');
        console.log(strCheckView.includes('inactive'));
    }else if (strCheckView.includes('inactive') == false)  {
        toggle = checkView.add('inactive');
        console.log(strCheckView.includes('inactive'));
    }
}