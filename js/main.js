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
        articleTop = $('.scroll').eq(snbIndex),
        offsetTop = articleTop.offset().top;
    $doc.stop().animate({
      scrollTop: offsetTop - 150
    });
  });
  $('.gnb a').on('click',function(){
    let gnbIndex = $(this).parent('li').index(),
        sectionTop = $('.scroll-gnb').eq(gnbIndex),
        offsetTop = sectionTop.offset().top;
    $doc.stop().animate({
      scrollTop: offsetTop + 100
    });
  });
  $(window).on('scroll', function(){
    scroll = $(window).scrollTop();
    // console.log(scroll)
    if(scroll > 0){
      $('.snb-list').removeClass('on');
      scrollNum0.addClass('on');
    };
    if(scroll >= 1000){
      $('.snb-list').removeClass('on');
      scrollNum1.addClass('on');
    };
    if(scroll >= 1900){
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
    if(scroll >= 6900){
      $('.snb-list').removeClass('on');
      scrollNum6.addClass('on');
    };
    if(scroll >= 7800){
      $('.snb-list a span').css({color: '#fff'});
    }else{
      $('.snb-list a span').css({color: '#555'});
    };
    if(scroll >= 8000){
      $('.snb-list').removeClass('on');
      scrollNum7.addClass('on');
    };
  });
  $('.work-list-tit').on('click', function(){
    $('.work-list-box').fadeOut();
    $(this).next().fadeIn();
    $('.work-list-tit').removeClass('on');
    $(this).addClass('on');
  });
});

