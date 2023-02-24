// navbar

    const BtnMenu = document.querySelector('.btn-menu');
    const MenuOpen = document.querySelector('#menuopen');
    const MenuClose = document.querySelector('#menuclose');
    const Navbar = document.querySelector('.navbar');
    //sticky
    window.addEventListener('scroll', function(){
        const header=document.querySelector('header');
        header.classList.toggle( "sticky", window.scrollY > 0 );
    });

    MenuOpen.addEventListener('click',() => {
        MenuOpen.style.display = 'none';
        MenuClose.style.display = 'block';
        Navbar.style.display = 'block';
    })

    MenuClose.addEventListener('click', () => {
        MenuOpen.style.display = 'block';
        MenuClose.style.display = 'none'
        Navbar.style.display = 'none';
    })

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popuptext = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if (user !=null) {
        //means user is logged in
        popuptext.innerHTML = `log in as, ${user.name}`;
        actionBtn.innerHTML = `log out`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.href = '/login';
        })
    }
}