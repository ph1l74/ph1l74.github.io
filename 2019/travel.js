function travelInit() {
    const navEls = document.querySelectorAll('.travel-nav-li');
    const travelSections = document.querySelectorAll('.travel-hero');

    travelCurrent = 0;

    navEls.forEach((navEl, index) => {
        navEl.addEventListener('click', function () {
            changeTravelSection(index);
        })
    });

    function changeTravelSection(sectionNumber) {
        switchNavEl(sectionNumber);
        const currentSection = travelSections[travelCurrent];
        const nextSection = travelSections[sectionNumber];
        const nextHeader = nextSection.querySelector('.travel-header');
        const nextSwiper = nextSection.querySelector('.swiper-container');
        const currentHeader = currentSection.querySelector('.travel-header');
        const currentSwiper = currentSection.querySelector('.swiper-container');

        const t1 = new TimelineMax({
            onStart: function () {
                navEls.forEach(navEl => {
                    navEl.style.pointerEvents = "none";
                });
            },
            onComplete: function () {
                navEls.forEach(navEl => {
                    navEl.style.pointerEvents = "all";
                })
            }
        });

        t1
            .fromTo(currentHeader, 0.5, { x: '0%', opacity: 1 }, { x: '-100%', opacity: 0 })
            .fromTo(currentSwiper, 0.5, { y: '0%', opacity: 1 }, { y: '-100%', opacity: 0 })
            .fromTo(nextSection, 0.5, { opacity: 0 }, { opacity: 1 })
            .fromTo(nextSwiper, 0.5, { x: '-100%', y: '0%', opacity: 0 }, { x: '0%', y: '0%', opacity: 1 })
            .fromTo(nextHeader, 0.5, { x: '0%', y: '-100%', opacity: 0 }, { x: '0%', y: '0%', opacity: 1 })

        travelCurrent = sectionNumber;
    }

    function switchNavEl(sectionNumber) {
        const activeEl = navEls[sectionNumber]
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        activeEl.classList.add('active');
    }

}

function makeSwiperOptions(prefix) {
    var swiperOptions = {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: `${prefix} .swiper-pagination`,
            clickable: true,
        },
        navigation: {
            nextEl: `${prefix} .swiper-button-next`,
            prevEl: `${prefix} .swiper-button-prev`,
        },
        keyboard: {
            enabled: true,
        },
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: true,
        // },
    }
    return swiperOptions
}



var swiperLituania = new Swiper('.litva .swiper-container', makeSwiperOptions('.litva'));
var swiperRiga = new Swiper('.riga .swiper-container', makeSwiperOptions('.riga'));
var swiperTallinn = new Swiper('.tallin .swiper-container', makeSwiperOptions('.tallin'));
var swiperHelsinki = new Swiper('.helsinki .swiper-container', makeSwiperOptions('.helsinki'));
var swiperIsland = new Swiper('.island .swiper-container', makeSwiperOptions('.island'));
var swiperPrague = new Swiper('.prague .swiper-container', makeSwiperOptions('.prague'));

travelInit();