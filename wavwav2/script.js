window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    
    var scrollPosition = window.scrollY;

    
    if (scrollPosition < 10) {
        header.style.backgroundColor = 'rgba(179, 179, 179, 0)';
    } else {
        header.style.display = 'block';
        header.style.backgroundColor = 'rgba(179, 179, 179, 1)';
    }
});
