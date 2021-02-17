import * as $ from 'jquery';

// function isDisabled() {
//     let count = $('.dropdown__count-btn').next().text();
//     let value = new Number(count);
//     if (value == 0) {
//         $('.dropdown__count-btn[data-btn="dec"]').prop('disabled', true);
//     }
// }

$('.dropdown__select').click(() => {
    $('.dropdown__select').toggleClass('dropdown__select--active');
    $('.dropdown__select-icon').toggleClass('fa-rotate-180');
    $('.dropdown__menu').slideToggle();
})


$('.dropdown__count-btn').click((event) => {

    const btn = $(event.target);
    const data_btn = btn.data();

    if (data_btn.btn == 'inc') {
        let count = btn.prev().text();
        let value = new Number(count);
        // if (value == 0) {
        //     $(`.dropdown__count-btn[data-btn="dec"]`).find(`[data-item="${data_btn.item}"]`).prop('disabled', false);
        // }
        btn.prev().text(++value);
        
    } else if (data_btn.btn == 'dec') {
        let count = btn.next().text();
        let value = new Number(count);
        if (value == 0) {
            // $(`.dropdown__count-btn[data-btn="dec" data-btn-item="${data_btn.btnItem}"]`).prop('disabled', true);
            return;
        }
        btn.next().text(--value);
    }



    
})
