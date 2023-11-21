// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

// JavaScript animation
function animateButton() {
    const btn = document.querySelector('.play-btn');
    btn.style.transform = 'rotate(360deg)';
    btn.style.transition = 'transform 1s ease-in-out';
}