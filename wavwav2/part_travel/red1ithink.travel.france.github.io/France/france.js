const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
  const boxPosition = box.getBoundingClientRect().top;

  if (boxPosition < window.innerHeight / 1.5) {
    box.style.opacity = 1;
  }
});
