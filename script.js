'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

const btnShowModal = document.querySelectorAll('.show-modal');
//console.log(btnShowModal);

const openModal = function () {
  //console.log('Button clicked');
  modal.classList.remove('hidden'); // no dot, dot is only for selector
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

// for (let i = 0; i < btnShowModal.length; i++)
//   btnShowModal[i].addEventListener('click', function () {
//     console.log('Button clicked');
//     modal.classList.remove('hidden'); // no dot, dot is only for selector
//     overlay.classList.remove('hidden');
//   });

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
/*btnCloseModal.addEventLister('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});*/

document.addEventListener('keydown', function (e) {
  //console.log('A key was pressed');
  //console.log(e); // see the object
  //console.log(e.key); // see the property of key
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
}); // all events
