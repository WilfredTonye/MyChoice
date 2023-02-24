//command popup
var OpenPopup = document.querySelector('#openpopup');
var ClosePopup = document.querySelector('#closepopup');
var AddBtn = document.querySelector('#add-btn');
var NomPlat = document.querySelector('#nom-plat');
var NomBoisson = document.querySelector('#nom-boisson');
var Overlay = document.querySelector('.overlay');

OpenPopup.addEventListener('click', () => {
    Overlay.style.display = 'block';
})

ClosePopup.addEventListener('click', () => {
    Overlay.style.display = 'none';
})

AddBtn.addEventListener('click', () => {
    NomBoisson.classList.toggle('hide');
})

//plate popup
var PlatePopup = document.querySelector('.card');
var ClosePlatePopup = document.querySelector('#closepopup');
var overlay =document.querySelector('.plate-overlay')

PlatePopup.addEventListener('click',() => {
    overlay.style.display = 'block';
} )