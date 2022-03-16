 $(function(){

   $(".menu a").on("click", function (event) {
     event.preventDefault();
     var id = $(this).attr('href'),
       top = $(id).offset().top;
     $('body,html').animate({ scrollTop: top }, 1500);
   });

   $('.education__video-link').magnificPopup({
     disableOn: 700,
     type: 'iframe',
     mainClass: 'mfp-fade',
     removalDelay: 160,
     preloader: false,

     fixedContentPos: false
   });

   $('.menu__btn').on('click', function(){
     $('.menu__list').toggleClass('menu__list--active');
     $('.header__top').toggleClass('header__top--off-blur');
     $('.btn-input__entry--active').fadeIn();
     $('html').addClass('no-scroll');
     $('.menu').toggleClass('menu__wisible');
     $('.menu__closet').toggleClass('menu__wisible');
   });

   $('.menu__closet').on('click', function (){
     $('.menu__list').removeClass('menu__list--active');
     $('.header__top').removeClass('header__top--off-blur');
     $('.btn-input__entry--active').fadeOut();
     $('html').removeClass('no-scroll');
     $('.menu').removeClass('menu__wisible');
     $('.menu__closet').removeClass('menu__wisible');
   });


   $('.test-open').on('click', function(e){
     e.preventDefault();
     $('.test').fadeIn(600);
     $('html').addClass('no-scroll');
   });
   $('.open-test').on('click', function(e){
     e.preventDefault();
     $('.test-after').fadeIn();
     $('html').addClass('no-scroll');
   });
   
   $('.test__closet').on('click', function(){
     e.preventDefault();
     $('.test').fadeOut(600);
     $('.test-next').fadeOut();
     $('.test-answer').fadeOut();
     $('.test-after').fadeOut();
     $('html').removeClass('no-scroll');
   })

   $('.test__btn').on('click', function (e) {
     e.preventDefault();
     $('.test').fadeOut();
     $('#one').fadeIn();
     $('html').addClass('no-scroll');
   });

   $('.test-answer__btn').on('click', function (e) {
     e.preventDefault();
     $('.test-answer').fadeOut();
     $('#two').fadeIn();
     $('html').addClass('no-scroll');
   });


   
   $('.test-next__btn').on('click', function () {
     let target = $('#block-' + $('input:checked').val());
     $('#one').fadeOut();
     target.fadeIn();
     console.log(target);  
     $('html').addClass('no-scroll');
   });

    function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
   let elements = document.querySelectorAll('.title ');

for (let elm of elements) {
  observer.observe(elm);
}
 });