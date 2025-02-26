document.getElementById('year').textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1, // Muestra una imagen por vez
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});