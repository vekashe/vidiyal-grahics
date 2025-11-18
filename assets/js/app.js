function hamburgerToggle() {
    var headerSec = document.querySelector('.header');
    headerSec.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", function() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});