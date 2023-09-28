const btnBack = document.querySelector('.back-btn');

btnBack.addEventListener('click', () => {
    window.history.back();
})

window.addEventListener("scroll", function() {
    var header = document.querySelector('.header');
    header.classList.toggle("sticky", window.scrollY > 0);
})