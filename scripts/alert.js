const alert = document.querySelector('.alert');
const confirmButton = alert.querySelector('.alert .confirm');

const showAlert = () => alert.classList.add('on');
const closeAlert = () => alert.classList.remove('on');

const confirmAge = () => {
    localStorage.setItem('ageValid', true);
    closeAlert();
}

confirmButton.addEventListener('click', () => confirmAge());

if (localStorage.getItem('ageValid') !== 'true') {
    showAlert();
}



const isAgeValid = () => localStorage.getItem('ageValid') && localStorage.getItem('ageValid') === 'true';

// pour fermer la popin quand on appuie sur échap
// document.onkeydown = event => {
//     event = event || window.event;
//     if (event.keyCode == 27) {
//         closeAlert();
//     }
// };