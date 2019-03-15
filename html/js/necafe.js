// Vegas slide
$(function() {
  $('#mainvisual').vegas({
    slides: [
    {src: 'images/slide01.png'},
    {src: 'images/slide02.png'},
    {src: 'images/slide03.png'},
    {src: 'images/slide04.png'},
    {src: 'images/slide05.png'}
    ],
    delay: 7000,
    timer: false,
    overlay: 'images/02.png',
    animation: 'kenburns',
    transition: 'blur',
    transitionDuration: 1000
  });
});