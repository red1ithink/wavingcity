window.addEventListener('scroll', function() {
    var header = document.querySelector('header');

    // 현재 스크롤 위치 가져오기
    var scrollPosition = window.scrollY;

    // 스크롤 위치에 따라 헤더 색상 조절
    if (scrollPosition > 850) { // 예를 들어, 스크롤이 100px 이상 되면 색상 변경
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'; // 색상 변경
    } else {
        header.style.backgroundColor = 'rgba(225, 225, 225, 0)'; // 기본 색상
    }
});
