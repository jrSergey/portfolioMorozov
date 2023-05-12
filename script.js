/* ================== Переключение иконки навигации ===================== */
let menuIcon = document.querySelector( '#menu-icon' );
let navbar = document.querySelector( '.navbar' );

menuIcon.onclick = () => {
    menuIcon.classList.toggle( 'bx-x' );
    navbar.classList.toggle( 'active' );
};

/* ================== Активная ссылка раздела прокрутки ===================== */

let sections = document.querySelectorAll( 'section' );
let navLinks = document.querySelectorAll( 'header nav a' );

window.onscroll = () => {
    sections.forEach( sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute( 'id' );

        if( top >= offset && top < offset + height ) {
            navLinks.forEach( links => {
                links.classList.remove( 'active' );
                document.querySelector( 'header nav a[href*=' + id +']').classList.add( 'active' );
            } );
        };
    } );

    /* ================ Закрепленная панель навигации ================== */
    let header = document.querySelector( 'header' );

    header.classList.toggle( 'sticky', window.scrollY > 100)

    /* ======= Удалить значок переключения и панель навигации 
               при нажатии на ссылку панели навигации (прокрутка) =======*/

    menuIcon.classList.remove( 'bx-x' );
    navbar.classList.remove( 'active' );

};



/* ===================== Библиотека SCROLLREVEAL ======================= */

ScrollReveal( {
    /* reset: true, */
    distance: '80px',
    duration: 2000,
    delay: 200
} );

/* Проявление контента картинок, параграфов при открытии страницы */
ScrollReveal().reveal( '.home-content, .heading', { origin: 'top' } );
ScrollReveal().reveal( '.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' } );
ScrollReveal().reveal( '.home-content h1, .about-img', { origin: 'left' } );
ScrollReveal().reveal( '.home-content p, .about-content', { origin: 'right' } );



/* ===================== библиотека typed js ======================= */

/* Смена названий профессий их проявление и исчезание через регистр */
const typed = new Typed( '.multiple-text', {
    strings: ['начинающий веб-разработчик'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
} );