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
    cover: true,
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
// cat'sスクロールで順番にフェードイン
$(document).ready(function() {
    if ($('.cat-area__box__img').length) {
    var EffectTime = 500;
    var DelayTime = 500;
    $('.cat-area__box__img img').css({'opacity': 0});
    $(window).on('scroll load', function() {
        var scMiddle = $(this).scrollTop() + $(this).height() / 1;
        var listPos = $('.cat-area__box__img').offset().top;
        if (listPos < scMiddle) {
            $('.cat-area__box__img img').each(function(index) {
                $(this).delay(DelayTime * index).animate({'opacity': 1}, EffectTime);
            });
        }
    });
}
});
// 他ページの見出しフェードイン
$(function() {
    $('#contents_wrap h2').hide().fadeIn('slow');
});