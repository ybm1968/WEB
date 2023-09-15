$(function() {

    $('.slide-container').slick ({
        dots: true,
        arrows: true,

        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></btton>'

        
    })

    
    $('.button').on('click', function() {
        alert('Click')
    })
})
