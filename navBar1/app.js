const navSlide = () => {
    const burger = document.querySelector('.burger'); /*-- selecting the .burger <div> from html --*/
    const nav = document.querySelector('.nav-links'); 
    const navLinks = document.querySelectorAll('.nav-links li');



    //TOGGLE NAV
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

           //ANIMATE LINKS IN SIDE MENU MOBILE BAR
    navLinks.forEach((link, index) => {
        if(link.style.animation) {
            link.style.animation= ''
        } else {
         link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
     });

     //BURGER ANIMATION
     burger.classList.toggle('toggle');

    });
 
}

navSlide();
