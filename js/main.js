$(function(){
  let $doc = $('html, body'),
      scroll = ''
      scrollNum0 = $('.snb-list').eq(0)
      scrollNum1 = $('.snb-list').eq(1)
      scrollNum2 = $('.snb-list').eq(2)
      scrollNum3 = $('.snb-list').eq(3)
      scrollNum4 = $('.snb-list').eq(4)
      scrollNum5 = $('.snb-list').eq(5)
      scrollNum6 = $('.snb-list').eq(6)
      scrollNum7 = $('.snb-list').eq(7)
      ;
  $('.snb a').on('click',function(){
    let snbIndex = $(this).parent('li').index(),
        sectionTop = $('.scroll').eq(snbIndex),
        offsetTop = sectionTop.offset().top;
    $doc.stop().animate({
      scrollTop: offsetTop - 150
    });
  });
  $(window).on('scroll', function(){
    scroll = $(window).scrollTop();
    if(scroll > 0){
      $('.snb-list').removeClass('on');
      scrollNum0.addClass('on');
    };
    if(scroll >= 1000){
      $('.snb-list').removeClass('on');
      scrollNum1.addClass('on');
    };
    if(scroll >= 2000){
      $('.snb-list').removeClass('on');
      scrollNum2.addClass('on');
    };
    if(scroll >= 3300){
      $('.snb-list').removeClass('on');
      scrollNum3.addClass('on');
    };
    if(scroll >= 4400){
      $('.snb-list').removeClass('on');
      scrollNum4.addClass('on');
    };
    if(scroll >= 5700){
      $('.snb-list').removeClass('on');
      scrollNum5.addClass('on');
    };
    if(scroll >= 7000){
      $('.snb-list').removeClass('on');
      scrollNum5.addClass('on');
    };
  });
});

