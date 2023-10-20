jQuery(document).ready(function ($) {

    if (sessionStorage.getItem('advertOnce') !== 'true') {
        //sessionStorage.setItem('advertOnce','true');
        $('.box').show();
    } else {
        $('.box').hide();
    }

    $('#refresh-page').on('click', function () {
        $('.box').hide();
        sessionStorage.setItem('advertOnce', 'true');
    });

    $('#reset-session').on('click', function () {
        $('.box').show();
        sessionStorage.setItem('advertOnce', '');
    });

});

// pop up 

const openModalButtons = document.querySelectorAll('.open-modal'),
      modal = document.querySelector('.modal'),
      closeModalButtons = document.querySelectorAll('.close-modal');

openModalButtons.forEach(openBtn => {
  openBtn.addEventListener('click', openModal)
});

closeModalButtons.forEach(closeBtn => {
  closeBtn.addEventListener('click', closeModal)
});

function openModal() {
  modal.classList.add('visible');
}

function closeModal() {
  modal.classList.remove('visible');
}
