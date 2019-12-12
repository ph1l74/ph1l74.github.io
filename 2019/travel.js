function init() {
    const navEls = document.querySelectorAll('.travel-nav-li');
    const travelSections = document.querySelectorAll('.travel-hero');

    current = 0;

    navEls.forEach((navEl, index) => {
        navEl.addEventListener('click', function () {
            changeTravelSection(index);
        })
    });

    function changeTravelSection(sectionNumber) {
        switchNavEl(sectionNumber);
        console.log(travelSections, sectionNumber);
        const currentSection = travelSections[current];
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

        current = sectionNumber;
    }

    function switchNavEl(sectionNumber) {
        const activeEl = navEls[sectionNumber]
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        activeEl.classList.add('active');
    }
}

init();