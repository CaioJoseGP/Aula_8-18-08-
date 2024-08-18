// PreLoader Inicial
window.onload = function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 1500);
};

// Menu Fixo
window.addEventListener('scroll', function() {
    const targetElement = document.getElementById('index-menu--box');
    const scrollPosition = window.scrollY;

    if (scrollPosition < 143) {
        targetElement.classList.add('menu-visible');
        targetElement.classList.remove('menu-fixed');

    } else {
        targetElement.classList.add('menu-fixed');
        targetElement.classList.remove('menu-visible');
    }
});

// Slideshow Splide
document.addEventListener('DOMContentLoaded', function () {
    var splideOfertas = new Splide('#splide-ofertas', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    });
    
    var splideNacional = new Splide('#splide-nacional', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    });

    var splideInternacional = new Splide('#splide-internacional', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    });

    splideOfertas.mount();
    splideNacional.mount();
    splideInternacional.mount();
});
