console.log(productText + "new" );
function clickBtn(){
    var cartImage = $('.cart_icon img').attr("src");
    $('.menu-m__toggle').toggleClass('-active');
    var displayStatus = $('.header_navigation').css('display');
    $('.header_navigation').css({'display' : displayStatus == 'none' ? 'flex' : 'none'});
    displayStatus == 'none' ?  $('.header_navigation').append('<div class="menu_image"><img src="catalog/view/theme/starta/image/logo_bottom.png"></div>') : $('.menu_image').remove();
    displayStatus == 'none' ?  $('.cart_icon > i').css({'color': '#fff'}) : $('.cart_icon > i').css({'color': '#252525'});
}
$(function(){
    $('.image_block-form .phone').mask("+7(999) 999-9999");
    $('.work_plan-form .phone').mask("7(999) 999-9999");
     $('input[type="phone"]').mask("+7(999) 999-9999");
});

// iziModal plugin settings

$(".thank-you").iziModal({
    title: "Спасибо, ваша заявка принята! Мы свяжемся с вами в ближайшее время",
    icon: 'icon-power_settings_new',
    headerColor: '#00af66',
    width: 600,
    timeout: 5000,
    timeoutProgressbar: true,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutDown',
    pauseOnHover: true
});
$(document).on('click', '.thank-you-link', function (event) {
    event.preventDefault();
    $('.thank-you').iziModal('open');
});
$(".error-message").iziModal({
    title: "Что-то пошло не так",
    icon: 'icon-power_settings_new',
    headerColor: '#bd5b5b',
    width: 600,
    timeout: 5000,
    timeoutProgressbar: true,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutDown',
    pauseOnHover: true
});
$(document).on('click', '.error-message-link', function (event) {
    event.preventDefault();
    $('.error-message').iziModal('open');
});

$("#modal-custom").iziModal({
    group: 'grupo1',
    history: false,
    width: 600,
    overlayColor: 'rgba(0, 0, 0, 0.6)',
    transitionIn: 'bounceInDown',
    transitionOut: 'bounceOutDown',
    navigateCaption: true,
    navigateArrows: "false",
    onOpened: function() {
        //console.log('onOpened');
    },
    onClosed: function() {
        //console.log('onClosed');  
    }
});
$(document).on('click', '.trigger-custom', function (event) {
    event.preventDefault();
    $('#modal-custom').iziModal('open');
});

// end iziModal plugin

// Yandex map 
ymaps.ready(init);    
function init(){ 
    var myMap = new ymaps.Map("yandex-map", {
        center: [59.933927, 30.318958],
        zoom: 12,
    }); 
    console.log(myMap.controls);
    myMap.controls.remove('zoomControl');
};

// end Yandex map
