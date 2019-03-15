// Vegas slide
$(function() {
  $('.slideshow').vegas({
    slides: [
    {src: 'images/cat01.png'},
    {src: 'images/cat02.png'},
    {src: 'images/cat03.png'},
    {src: 'images/cat04.png'},
    {src: 'images/cat05.png'}
    ],
    delay: 5000,
    timer: true,
    overlay: 'images/02.png',
    animation: 'kenburns',
    transition: 'blur',
    transitionDuration: 1000
  });
});