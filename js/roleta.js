var tmpAnimation = 0;

var rotate = $('#rotateButton');
var receber = $('#receberButton');
var hideText = $('.textoInicio');
var showText = $('.textoFin');
var hideTitle = $('#miniJogoTitle');
var showTitle = $('#miniJogoTitleFin');

$("#rotateButton").click(function(){
    let element = $("#roleta");

    tmpAnimation = tmpAnimation + 1350;
    $({degrees: tmpAnimation - 1350}).animate({degrees: tmpAnimation}, {
        duration: 2000,
        step: function(now) {
            element.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });

    $("#rotateButton").click(setTimeout(function(){
        rotate.hide();
        receber.show();
        hideText.hide();
        showText.show();
        hideTitle.hide();
        showTitle.show();
    }, 2500) );

});

$("#iconRodaImg").click(function(){
    let showMenu = $(".roda");
    $(showMenu).show();
    let hideIcon = $(".iconRoda");
    $(hideIcon).hide();
});

$("#close").click(function(){
    let hideMenu = $(".roda");
    $(hideMenu).hide();
    let showIcon = $(".iconRoda");
    $(showIcon).show();
});





    



/* 
let triangulo = $('#triangulo');
    triangulo.animate();
*/






