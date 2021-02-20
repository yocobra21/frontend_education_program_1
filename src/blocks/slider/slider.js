import * as $ from 'jquery';

$('.slider__item').ionRangeSlider({
    type: "double",
    
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    grid: false,
    // force_edges: false,     // force UI in the box
    hide_min_max: true,    // show/hide MIN and MAX labels
    hide_from_to: true,    // show/hide FROM and TO labels
    // block: false
})