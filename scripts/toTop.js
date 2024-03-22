window.addEventListener('scroll', function() {
    var button = document.getElementById('backToTopBtn');
    if (window.pageYOffset > 100) {
        button.classList.add('show');
    } else {
        button.classList.remove('show');
    }
});

document.getElementById('backToTopBtn').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});