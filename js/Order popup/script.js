const popupButton = document.querySelector('.popupButton');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.closeButton');

popupButton.onclick = () => {
    popup.classList.add('active');
}

closeButton.onclick = () => {
    popup.classList.remove('active');
}