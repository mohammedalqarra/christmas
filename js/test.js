/*SHOW MENU */
let navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose  = document.getElementById('nav-close');

    if(navToggle){
        navToggle.addEventListener('click',()=>{
            navMenu.classList.add('show-menu')
        })
    }

       if(navClose){
           navClose.addEventListener('click',()=>{
               navMenu.classList.remove('show-menu')
           })
       }
/*REMOVE MENU MOBILE */

let navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    let navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

/*CHANGE BACKGROUND HEADER*/
function scrollHeader(){
    let header = document.getElementById('header');

    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader);

/*SWIPER*/

let newSwiper = new Swiper(".new-swiper",{
    spaceBetween: 24,
    loop: 'true',
    slidesPerView: 'auto',
    centeredSlides: true,
   pagination: {
       el: ".swiper-pagination",
       dynamicBullets: true
   },
   breakpoints: {
    992 : {
     spaceBetween: 80,
    },
  },
});
/*SCROLL SECTIONS ACTIVE LINK */
let  sections = document.querySelectorAll('section[id]')

function scrollActive(){
    let scrollY = window.pageYOffset

    sections.forEach(current =>{
        let sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*Dark */
function scrollUp(){
    let scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  
  /*=============== DARK LIGHT THEME ===============*/ 
  let themeButton = document.getElementById('theme-button')
  let darkTheme = 'dark-theme'
  let iconTheme = 'bx-sun'
  
  // Previously selected topic (if user selected)
  let selectedTheme = localStorage.getItem('selected-theme')
  let selectedIcon  = localStorage.getItem('selected-icon')
  
  // We obtain the current theme that the interface has by validating the dark-theme class
  let getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  let getCurrentIcon  = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'
  
  // We validate if the user previously chose a topic
  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }
  
  // Activate / deactivate the theme manually with the button
  themeButton.addEventListener('click', () => {
      // Add or remove the dark / icon theme
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      // We save the theme and the current icon that the user chose
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })
  /*gift */

let myIcons = document.querySelectorAll('.gift__icon')

myIcons.forEach(e => e.onclick = function (){
    if (this.classList.contains("bx-heart")) {
        this.classList.remove("bx-heart");
        this.classList.add("bxs-heart");
      } else if (this.classList.contains("bxs-heart")) {
        this.classList.remove("bxs-heart");
        this.classList.add("bx-heart");
      }
})

let myNew = document.querySelectorAll('.new__icon')

myNew.forEach(m=>m.onclick=function(){
    if (this.classList.contains("bx-heart")) {
        this.classList.remove("bx-heart");
        this.classList.add("bxs-heart");
      } else if (this.classList.contains("bxs-heart")) {
        this.classList.remove("bxs-heart");
        this.classList.add("bx-heart");
      }
})
  /*SCROLL REVEAL */

  let sr = ScrollReveal({
      origin:'top',
      distance:'60px',
      duration:2500,
      delay:400,
  })
  sr.reveal(`.home__img,  .new__container, .footer__container`)
  sr.reveal(`.home__data`,{delay:500})
  sr.reveal(`.giving__content, .gift__card` ,{interval:100})
  sr.reveal(`.celebrate__data, .message__form,.footer__img1`,{origin:'left'})
  sr.reveal(`.celebrate__img, .message__img,.footer__img2`,{origin: 'right'})