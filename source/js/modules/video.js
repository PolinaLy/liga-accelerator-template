export const initVideo = function () {
  let video = document.querySelector('video');
  let buttonPlay = document.querySelector('.gym__video-button');

  if (video && buttonPlay) {
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
  }
};
