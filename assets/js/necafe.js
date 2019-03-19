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
    delay: 8000,
    timer: false,
    overlay: 'images/02.png',
    animation: 'kenburns',
    transition: 'blur',
    transitionDuration: 1000
  });
});

// topへ戻るボタン
$(function() {
    var appear = false;
    var pagetop = $('#page_top');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            if (appear == false) {
                appear = true;
                pagetop.stop().animate({
                    'bottom': '50px'
                }, 300);
            }
        } else {
            if (appear) {
                appear = false;
                pagetop.stop().animate({
                    'bottom': '-50px'
                }, 300);
            }
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0}, 500);
        return false;
    });
});
// top スクロールでbox表示
var tgt = $('.ef');
$(window).on('load scroll', function() {
    var wh = $(window).height();
    var sc = $(window).scrollTop();

    var action = function() {
        tgt.each(function() {
            var border =
    $(this).offset().top;
            if(sc > border - wh +100) {
                $(this).addClass('is_visible');
            }
        });
    };
    action();
});