$(document).ready(function(){

//錨點

  $('.container').on('click', '.anchor', function(event){
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
  });

//判斷高度

$(window).scroll(function() {

  if ($(window).scrollTop() >= $('.personal-profile').offset().top) {
    $('header').addClass('fixed');
    $('.menu-s').addClass('fixed')/*.css('top','56px')*/;
    $('.profile').addClass('here');
    $('.resume').removeClass('here');
    $('.slider').css('margin-left','0');
    $('.intro').fadeIn(2000);
  } else {
    $('header').removeClass('fixed');
    $('.menu-s').removeClass('fixed');
    $('.profile').removeClass('here');
    $('.resume').removeClass('here');
  }

});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.resume-wrap').offset().top){
    $('.resume-article').slideDown(1500);
    $('.sub-title').delay(1500).css('margin-left','0');
    $('.resume').addClass('here');
    $('.profile').removeClass('here');
    $('.skill').removeClass('here');
    $('.portfolio').removeClass('here');
  }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.skill-wrap').offset().top){
    $('#bar-1').delay(1000).css('height', '290px');
    $('#bar-2').delay(1000).css('height', '350px');
    $('#bar-3').delay(1000).css('height', '200px');
    $('#bar-4').delay(1000).css('height', '310px');
    $('#bar-5').delay(1000).css('height', '330px');
    $('#bar-6').delay(1000).css('height', '380px');
    $('.skill').addClass('here');
    $('.resume').removeClass('here');
    $('.contact').removeClass('here');
    $('.portfolio').removeClass('here');
  }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.portfolio-wrap').offset().top - 10){
    $('.portfolio-list').fadeIn(1500);
    $('.portfolio').addClass('here');
    $('.profile').removeClass('here');
    $('.skill').removeClass('here');
  }
});

$(window).scroll(function() {

  if($(window).scrollTop() >= $('.contact-wrap').offset().top - 10){
    $('.contact-list').css('margin-left','0');
    $('.contact-form').css('margin-right','0');
    $('.contact').addClass('here');
    $('.skill').removeClass('here');
    $('.portfolio').removeClass('here');
  }
});

//圖片輪播

  $('.slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
  });

// 手機版menu

  $('.phone-bar').click(function(){
    $('.menu-s').slideToggle();
  });

// 文字閃爍

  var i = 0;
  function blinker(){
    if(i === 0){
      $('.blink_me').text('passion for the world !').fadeIn(800).delay(2000).fadeOut(800);
      i = i + 1;
    }else{
      $('.blink_me').text('learning new things!').fadeIn(800).delay(2000).fadeOut(800);
      i = i - 1;
    }
  }
  setInterval(blinker,4000);

});
