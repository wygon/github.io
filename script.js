document.addEventListener("DOMContentLoaded", () => {
    console.log("Strona wczytana.");
    
    const images = document.querySelectorAll('.zoom-img');

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            image.style.transform = 'scale(1.1)'; // Powiększenie o 10%
        });

        image.addEventListener('mouseout', () => {
            image.style.transform = 'scale(1)'; // Powrót do oryginalnego rozmiaru
        });
    });
});
// script.js
function toggleNav() {
    const sidenav = document.getElementById('sidenav');
    const isOpen = sidenav.style.left === '0px';
    
    if (isOpen) {
        sidenav.style.left = '-250px';
    } else {
        sidenav.style.left = '0px';
    }
}