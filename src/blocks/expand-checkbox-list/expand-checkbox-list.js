$('.expand-checkbox-list__title').click(() => {
    $('.expand-checkbox-list__list').toggleClass('expand-checkbox-list__list--active')
    $('.expand-checkbox-list__icon').css({'transform' : 'rotate(180deg)'})
})