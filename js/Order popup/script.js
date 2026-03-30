
function showOrderPopup(){

const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.closeButton');


 popup.classList.add('active');

closeButton.onclick = () => {
    popup.classList.remove('active');
}
}