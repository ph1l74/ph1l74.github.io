function init() {
    const navEls = document.querySelectorAll('.section-nav-el');
    const sections = document.querySelectorAll('.section');
    const backgrounds = [
        `linear-gradient(45deg, #1F1C18, #007a8e)`,
        `linear-gradient(45deg, #1F1C18, #8e0000)`,
        `linear-gradient(45deg, #1F1C18, #8e8a00)`,
        `linear-gradient(45deg, #1F1C18, #37008e)`,
        `linear-gradient(45deg, #1F1C18, #8e005c)`,
        `linear-gradient(45deg, #1F1C18, #008e60)`,
    ];

    const maxSections = 4;
    let current = 0;
    let scrollSlide = 0;

    navEls.forEach((navEl, index) => {
        navEl.addEventListener('click', function () {
            changeNav(this);
            changeSection(index);
            scrollSlide = index;
        })
    });

    function changeNav(nav) {
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        nav.classList.add('active');
    }
    function changeSection(sectionNumber) {
        const nextSection = sections[sectionNumber];
        const currentSection = sections[current];
        const nextHero = nextSection.querySelector('.hero');
        const nextDetails = nextSection.querySelector('.details');
        const currentHero = currentSection.querySelector('.hero');
        const currentDetails = currentSection.querySelector('.details');
        const body = document.querySelector('body');

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
            .fromTo(currentHero, 0.5, { y: '0%', opacity: 1 }, { y: '-100%', opacity: 0 })
            .fromTo(currentDetails, 0.5, { x: '0%', opacity: 1 }, { x: '-100%', opacity: 0 }, '0.3')
            .to(body, 0.5, { backgroundImage: backgrounds[sectionNumber] }, '-=0.3')
            .fromTo(currentSection, 0.5, { opacity: 1, pointerEvents: 'all', zIndex: 1 }, { opacity: 0, pointerEvents: 'none', zIndex: -1 })
            .fromTo(nextSection, 0.5, { opacity: 0, pointerEvents: 'none', zIndex: -1 }, { opacity: 1, pointerEvents: 'all', zIndex: 1 })
            .fromTo(nextHero, 0.5, { y: '100%', opacity: 0 }, { y: '0%', opacity: 1 }, "-=0.3")
            .fromTo(nextDetails, 0.5, { x: '100%', opacity: 0 }, { x: '0%', opacity: 1 }, "-=0.3")
        // .set(nextSection, { clearProps: 'all' });

        current = sectionNumber;
    }

    document.addEventListener('wheel', throttle(scrollChange, 1500));
    document.addEventListener('touchmove', throttle(scrollChange, 1500));

    function switchNavEl(sectionNumber) {
        const activeEl = navEls[sectionNumber]
        navEls.forEach(navEl => {
            navEl.classList.remove('active');
        })
        activeEl.classList.add('active');
    }

    function scrollChange(e) {
        if (e.deltaY > 0) {
            scrollSlide += 1;
        } else {
            scrollSlide -= 1;
        }
        if (scrollSlide > maxSections) {
            scrollSlide = 0;
        }
        if (scrollSlide < 0) {
            scrollSlide = maxSections;
        }
        changeSection(scrollSlide);
        switchNavEl(scrollSlide);
        current = scrollSlide;
    }

}

function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit)
        }
    }
}

init();
