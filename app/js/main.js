$(function () {
  $('.menu a').on('click', function (event) {
    event.preventDefault()
    let id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 1500)
  })

  $('.education__video-link').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  })

  $('.menu__btn').on('click', function () {
    $('.menu__list').addClass('menu__list--active')
    $('.header__top').addClass('header__top--off-blur')
    $('html').addClass('no-scroll')
    $('.menu').addClass('menu__wisible')
    $('.menu__closet').addClass('menu__wisible')
  })

  $('.menu__closet').on('click', () => {
    $('.menu__list').removeClass('menu__list--active')
    $('.header__top').removeClass('header__top--off-blur')
    $('html').removeClass('no-scroll')
    $('.menu').removeClass('menu__wisible')
    $('.menu__closet').removeClass('menu__wisible')
  })

  $('.menu__list-item').on('click', () => {
    $('.menu__list').removeClass('menu__list--active')
    $('.header__top').removeClass('header__top--off-blur')
    $('html').removeClass('no-scroll')
    $('.menu').removeClass('menu__wisible')
  })
})
if (navigator.userAgent.match(/SamsungBrowser/)) {
  var metaThemeColor = document.querySelector('meta[name=theme-color]')
  metaThemeColor.setAttribute('content', '#ffffff')
}
