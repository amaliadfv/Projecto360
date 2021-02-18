
function hero(){
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 2000,
        dots: true,
        infinite: true,
        fade: true,
        arrows: false
      });
}


$(document).ready(function(){
    hero();
});