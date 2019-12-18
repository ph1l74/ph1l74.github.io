function musicInit() {
    const navEls = document.querySelectorAll('.music-nav-li');
    const musicSections = document.querySelectorAll('.music-hero');

    musicCurrent = 0;

    navEls.forEach((navEl, index) => {
        navEl.addEventListener('click', function () {
            changeMusicSection(index);
        })
    });

    function changeMusicSection(sectionNumber) {
        switchNavEl(sectionNumber);
        const currentSection = musicSections[musicCurrent];
        const nextSection = musicSections[sectionNumber];
        
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

function mostListenedAlbumInit() {
    const albumsEls = document.querySelectorAll('.most-listened-album');

    albumsEls.forEach((albumEl, index) => {
        albumEl.addEventListener('click', function () {
            changeAlbum(index);
        })
    });

    function changeAlbum(albumNumber) {
        switchAlbum(albumNumber);
        const target = document.querySelector('.most-listened-albums-cover')
        const albumImage = albumsEls[albumNumber].style.backgroundImage;
        const albumTitle = albumsEls[albumNumber].innerHTML;
        const targetFront = document.querySelector('.album-cover-inner-front');
        const targetTitle = document.querySelector('.album-cover-inner-front-title');
        targetFront.style.backgroundImage = albumImage;
        targetTitle.innerHTML = albumTitle;

        const t1 = new TimelineMax({
            onStart: function () {
                albumsEls.forEach(albumEl => {
                    albumEl.style.pointerEvents = "none";
                });
            },
            onComplete: function () {
                targetFront.style.backgroundImage = albumImage;
                targetTitle.innerHTML = albumTitle;
                t1.reverse();
                setTimeout(function () {
                    albumsEls.forEach(albumEl => {
                        albumEl.style.pointerEvents = "all";
                    });
                }, 300)
            }
        });

        t1.fromTo(target, 0.3, { x: '0%', opacity: 1 }, { x: '-100%', opacity: 0 });
    }

    function switchAlbum(albumNumber) {
        const activeAlbum = albumsEls[albumNumber];
        albumsEls.forEach(albumsEl => {
            albumsEl.classList.remove('active');
        })
        activeAlbum.classList.add('active');
    }
}

function freshAlbums() {
    const albumsEls = document.querySelectorAll('.fresh-album');

    albumsEls.forEach((albumEl, index) => {
        albumEl.addEventListener('click', function () {
            changeAlbum(index);
        })
    });

    function changeAlbum(albumNumber) {
        switchAlbum(albumNumber);
        const target = document.querySelector('.fresh-albums-cover')
        const albumImage = albumsEls[albumNumber].style.backgroundImage;
        const albumTitle = albumsEls[albumNumber].innerHTML;
        const targetFront = document.querySelector('.fresh-album-cover-inner-front');
        const targetTitle = document.querySelector('.fresh-album-cover-inner-front-title');
        targetFront.style.backgroundImage = albumImage;
        targetTitle.innerHTML = albumTitle;

        const t1 = new TimelineMax({
            onStart: function () {
                albumsEls.forEach(albumEl => {
                    albumEl.style.pointerEvents = "none";
                });
            },
            onComplete: function () {
                targetFront.style.backgroundImage = albumImage;
                targetTitle.innerHTML = albumTitle;
                t1.reverse();
                setTimeout(function () {
                    albumsEls.forEach(albumEl => {
                        albumEl.style.pointerEvents = "all";
                    });
                }, 300)
            }
        });

        t1.fromTo(target, 0.3, { x: '0%', opacity: 1 }, { x: '-100%', opacity: 0 });
    }

    function switchAlbum(albumNumber) {
        const activeAlbum = albumsEls[albumNumber];
        albumsEls.forEach(albumsEl => {
            albumsEl.classList.remove('active');
        })
        activeAlbum.classList.add('active');
    }
}

musicInit();

mostListenedAlbumInit();

freshAlbums();