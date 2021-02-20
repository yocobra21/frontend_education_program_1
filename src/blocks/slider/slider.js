import * as $ from 'jquery';

$('.slider__item').ionRangeSlider({
    type: "double",
    min: 0,
    max: 20000,
    from: 5000,
    to: 10000,
    grid: false,
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    onChange: function (data) {
        $('.slider__amount-min').text(`${data.from}₽ - `)
        $('.slider__amount-max').text(`${data.to}₽`)
    },
    onStart: function (data) {
        $('.slider__amount-min').text(`${data.from}₽ - `)
        $('.slider__amount-max').text(`${data.to}₽`)
    }
})