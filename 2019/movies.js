function moviesInit() {
    const navEls = document.querySelectorAll('.movies-nav-li');
    const moviesSections = document.querySelectorAll('.movies-hero');

    musicCurrent = 0;

    navEls.forEach((navEl, index) => {
        navEl.addEventListener('click', function () {
            changeMusicSection(index);
        })
    });

    function changeMusicSection(sectionNumber) {
        switchNavEl(sectionNumber);
        const currentSection = moviesSections[musicCurrent];
        const nextSection = moviesSections[sectionNumber];

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
            .fromTo(currentSection, 0.5, { zIndex: 1, x: '0%', opacity: 1, ease: Expo.easeOut }, { x: '-100%', opacity: 0, zIndex: -1, ease: Expo.easeOut })
            .fromTo(nextSection, 0.5, { zIndex: -1, x: '100%', opacity: 0, ease: Expo.easeOut }, { x: '0%', opacity: 1, zIndex: 1, ease: Expo.easeOut }, '-=0.5');

        musicCurrent = sectionNumber;
    }

    function switchNavEl(sectionNumber) {
        const activeEl = navEls[sectionNumber]
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        activeEl.classList.add('active');
    }

}

const sliderOptions = {
    draggable: true,
    freeScroll: false,
    wrapAround: false,
    adaptiveHeight: true

}


moviesInit();

var flkty = new Flickity('.movies-all-slider', sliderOptions);
// var ebota = new Flickity('.movies-top-2019-slider', sliderOptions);
