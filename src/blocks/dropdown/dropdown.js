import * as $ from 'jquery';

$('.dropdown__select').click(() => {
    $('.dropdown__select').toggleClass('dropdown__select--active');
    $('.dropdown__select-icon').toggleClass('fa-rotate-180');
    $('.dropdown__menu').slideToggle();
})
