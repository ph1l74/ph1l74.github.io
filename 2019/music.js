function mostListenedAlbumInit() {
    const albumsEls = document.querySelectorAll('.most-listened-album');
    const albumFront = document.querySelectorAll('.album-cover-inner-front');
    const albumBack = document.querySelectorAll('.album-cover-inner-back');
    const albumBackTitle = document.querySelectorAll('.album-cover-inner-back-title');

    current = 0;

    albumsEls.forEach((albumEl, index) => {
        albumEl.addEventListener('click', function () {
            changeAlbum(index);
        })
    });

    function changeAlbum(albumNumber) {
        switchAlbum(albumNumber);
        const albumImage = albumsEls[albumNumber].style.backgroundImage;
        const albumTitle = albumsEls[albumNumber].innerHTML;
        const targetFront = document.querySelector('.album-cover-inner-front');
        const targetBack = document.querySelector('.album-cover-inner-back');
        const targetTitle = document.querySelector('.album-cover-inner-back-title');
        targetFront.style.backgroundImg = albumImage;
        targetBack.style.backgroundImg = albumImage;
        targetTitle.innerHTML = albumTitle;
        console.log(albumImage)
        // const currentSection = travelSections[current];
        // const nextSection = travelSections[sectionNumber];
        // const nextHeader = nextSection.querySelector('.travel-header');
        // const nextSwiper = nextSection.querySelector('.swiper-container');
        // const currentHeader = currentSection.querySelector('.travel-header');
        // const currentSwiper = currentSection.querySelector('.swiper-container');

        // const t1 = new TimelineMax({
        //     onStart: function () {
        //         navEls.forEach(navEl => {
        //             navEl.style.pointerEvents = "none";
        //         });
        //     },
        //     onComplete: function () {
        //         navEls.forEach(navEl => {
        //             navEl.style.pointerEvents = "all";
        //         })
        //     }
        // });

        // t1
        //     .fromTo(currentHeader, 0.5, { x: '0%', opacity: 1 }, { x: '-100%', opacity: 0 })
        //     .fromTo(currentSwiper, 0.5, { y: '0%', opacity: 1 }, { y: '-100%', opacity: 0 })
        //     .fromTo(nextSection, 0.5, { opacity: 0 }, { opacity: 1 })
        //     .fromTo(nextSwiper, 0.5, { x: '-100%', y: '0%', opacity: 0 }, { x: '0%', y: '0%', opacity: 1 })
        //     .fromTo(nextHeader, 0.5, { x: '0%', y: '-100%', opacity: 0 }, { x: '0%', y: '0%', opacity: 1 })

        current = albumNumber;
    }

    function switchAlbum(albumNumber) {
        const activeAlbum = albumsEls[albumNumber];
        albumsEls.forEach(albumsEl => {
            albumsEl.classList.remove('active');
        })
        activeAlbum.classList.add('active');
    }
}

mostListenedAlbumInit();