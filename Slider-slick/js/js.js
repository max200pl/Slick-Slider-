$('.sl').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    //speed: 1000, // переход анимации (базовый по 300)
    cssEase: 'ease-in', // начало быстрок конец затухание
    //(ease-in;ease-out;ease-in-out;linear)
    asNavFor: '.sl2',
    initialSlide: 11,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                dots: false,
            }
    }
  ]
});


$('.sl2').slick({
    dots: true,
    slidesToShow: 7,
    centerMode: true,
    centerPadding: '40px',
    asNavFor: '.sl', // сопряжение двух слайдов
    initialSlide: 11, // 12 слайдов
    focusOnSelect: true, // фокусирование на нужном и вывод на основной
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 6
            }
    },
        {
            breakpoint: 960,
            settings: {
                slidesToShow: 5

            }
    },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 4

            }
    },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 3

            }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                dots: false,
                centerMode: false

            }
    }
  ]

});
