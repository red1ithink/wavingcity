window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    // 현재 스크롤 위치 가져오기
    var scrollPosition = window.scrollY;

    // 스크롤 위치에 따라 헤더 숨기기
    if (scrollPosition < 850) { // 스크롤이 850px 이상 되면
        header.style.backgroundColor = 'rgba(179, 179, 179, 0)';
    } else {
        header.style.display = 'block'; // 헤더 보이기
        header.style.backgroundColor = 'rgba(179, 179, 179, 0.5)';
    }
});
