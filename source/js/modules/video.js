let video = document.querySelector('.gym__video');
let buttonPlay = document.querySelector('.gym__video-button');

buttonPlay.addEventListener('click', () => {
  if (video.classList.contains('is-active')) {
    video.classList.remove('is-active');
  } else {
    video.play();
    video.setAttribute('controls', '');
    video.classList.add('is-active');
    buttonPlay.classList.add('visually-hidden');
  }
});
