'use strict';

// Selecting Elements

const navbar = document.querySelector('.navbar');

// Functions

// Event Handlers

// Sticky navigation
window.addEventListener('scroll', e => {
  navbar.classList.add('sticky');
  setTimeout(t => {
    navbar.classList.remove('sticky');
  }, 2000);
});
