'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//?open modal for each of the three buttons... but WHY would you want to show the same modal for each button?
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

//*Close modal via "X" button
btnCloseModal.addEventListener('click', closeModal);
//*Close modal by clicking "outside", in the overlay
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function () {
    if (key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });