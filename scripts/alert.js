const alert = document.querySelector('.alert');
const alertOverlay = alert.querySelector('.alert-overlay');
const alertClose = alert.querySelector('.alert-close');
const alertButton = alert.querySelector('.alert .confirm');

const closeAlert = () => alert.classList.remove('on');

alertOverlay.addEventListener('click', closeAlert);
alertClose.addEventListener('click', closeAlert);
alertButton.addEventListener('click', closeAlert);

// pour fermer la popin quand on appuie sur échap
document.onkeydown = event => {
    event = event || window.event;
    if (event.keyCode == 27) {
        closeAlert();
    }
};