// ハンバーガーメニュー
$(function () {
    $('#js-hamburger').click(function () {
    //toggleClassでclassをつけたり外したりする
      $('body').toggleClass('is-drawerActive')
    //attr()でaria-expandedがfalseの場合、thisはクリックした要素そのもの
      if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true)
        //jQueryでcss操作、アニメーションにはdisplayではなく、visibilityを使う
        $('#js-global-menu').css('visibility', 'visible')
        $('#js-global-menu').attr('area-hidden','false')
      } else {
        $(this).attr('aria-expanded', false)
        $('#js-global-menu').css('visibility', 'hidden')
        $('#js-global-menu').attr('area-hidden','true')
      }
    })
   });

// スクロールヒント
   window.addEventListener('DOMContentLoaded', function(){
    new ScrollHint('.js-scrollable');
  });
   
  new ScrollHint('.js-scrollable', {
    scrollHintIconAppendClass: 'scroll-hint-icon-white', // white-icon will appear
    i18n: {
      scrollable: 'スクロールできます'
    }
  });

// メインビジュアルswiper
  $(function(){

    var swiper = new Swiper('.swiper-container', {
      // trueでループ、false若しくは記述なしでループしない
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
    },
      speed: 1500,
    });
    });

// モーダル
$(function() {
  $('.openModal').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
  $('#closeModal').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
  $('#modalBg').on('click', function () {
    $('#modalArea').toggleClass('is-show');
  });
});

// ヘッダースクロール
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("header-scroll", window.scrollY > 60)
});

$(function() {
  let headerLogo = $('.header__logo-scroll');
  let hamburgerLine = $('.hamburger__line-top');

  $(window).scroll(function(){
    if($(this).scrollTop() > 60) {
      headerLogo.attr('src', 'image/logo.png');
      hamburgerLine.addClass('hamburger__line_bg-color');
    } else {
      headerLogo.attr('src', 'image/logo2.png');
      hamburgerLine.removeClass('hamburger__line_bg-color');
    }
  })
});

// モーダル日付カレンダー
flatpickr("#flatpickr", {
  locale:"ja",
  minDate:"today",
  mode: "multiple",
  dateFormat: "Y-m-d"
});


// お知らせタブ
$(function() {
 
  // ①タブをクリックしたら発動
  $('.news__tab li').click(function() {
 
    // ②クリックされたタブの順番を変数に格納
    var index = $('.news__tab li').index(this);
 
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.news__tab li').removeClass('active');
 
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active');
 
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.news__wrapper').removeClass('show').eq(index).addClass('show');

    $('.news__wrapper').fadeOut(0);

    $('.show').fadeIn(1000);
 
  });
});


// AOS

AOS.init({
  once: true,
});