const swiperEl = document.querySelector('.formats-section__container.swiper');

if (swiperEl) {
    new Swiper(swiperEl, {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,

        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1280: {
                slidesPerView: 3,
            },
        },

        pagination: {
            el: swiperEl.querySelector('.pagination'),
            clickable: true,
            bulletClass: 'pagination__button',
            bulletActiveClass: 'pagination__button--active',
        },

        navigation: {
            nextEl: '.carousel-button.next',
            prevEl: '.carousel-button.prev',
        },
    });
}
