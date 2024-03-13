let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // About 섹션이 보이면 이미지 슬라이드 애니메이션 시작
        const image = entry.target.querySelector('.image'); // About 섹션 안의 이미지 선택
        if (image) { // 이미지가 존재하는 경우에만 애니메이션 실행
          image.classList.add('slide-in'); // 이미지에 slide-in 클래스 추가
        }
      } else {
        // About 섹션이 사라지면 애니메이션 제거 (선택적)
        const image = entry.target.querySelector('.image');
        if (image) {
          image.classList.remove('slide-in');
        }
      }
    });
  });
  
  let about = document.querySelector('.about-wrap');
  observer.observe(about);
  