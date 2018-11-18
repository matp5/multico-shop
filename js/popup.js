const popup = document.querySelector('#popup');
const popupBtn = document.querySelectorAll('.addItem');
const closeBtn = document.querySelector('.close');

// popupBtn.addEventListener('click', openPopup);

for (let i = 0; i < popupBtn.length; i++) {
    let btns = popupBtn[i];

    btns.addEventListener('click', function (event) {
        event.preventDefault();

        openPopup(this);
    }, false);
};

closeBtn.addEventListener('click', closePopup);
window.addEventListener('click', outsideClick);

function openPopup() {
    popup.style.display = 'block';
}

function closePopup() {
    popup.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == popup) {
        popup.style.display = 'none';
    }
}