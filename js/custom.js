$(document).ready(function () {
    //slider-banner
    $('.banner-slider').slick({
        autoPlay: true,
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
        responsive: [
            {
                breakpoint:768,
                settings:{
                    autoPlay:true,
                    slidesToShow:1,
                    arrows:false,
                }
                
            },
        ]
    })
    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    })
    //popup
    new VenoBox({
        selector: ".my-link"
    });
    //blog-slider
    // $('.blog-slider').slick({
    //     arrows:false,
    //     autoplay: true ,
    //     dots: false,
    //     slidesToShow: 3,
    //     slidesToScroll:1,
    //     centerMode: false,
    //     centerPadding: '0px',
    // })

    //Testimonial slider

    $('.test-slider1').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerPadding: '116px',
        asNavFor: '.testimonial-img'
    })

    $('.testimonial-img').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
        nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
        asNavFor: '.test-slider1',
        responsive: [
            {
                breakpoint:992,
                settings:{
                    slidesToShow:3,
                    slidesToScroll: 1,
                    arrows:false,
                }
                
            },
        ]
    })

    //brand
    $('.brand-slider').slick({
        prevArrow: '<i class="fas fa-chevron-left left"></i>',
        nextArrow: '<i class="fas fa-chevron-right right"></i>',
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
        responsive: [
            {
                breakpoint:992,
                settings:{
                    slidesToShow:3,
                    slidesToScroll: 1,
                    arrows:false,
                }
                
            },
        ]
    });
})