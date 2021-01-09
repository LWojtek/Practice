const square = document.querySelectorAll('.square');







/* ********************************* */
/* A N I M A T I O N  O N  T E X T S */
/* ********************************* */


const paragraph1 = document.querySelector('.paragraph1');
const contactBtn = document.querySelector('.contact__btn');
const paragraph = document.querySelector('.paragraph');
const h1 = document.querySelector('.h1');



document.addEventListener('scroll', () => {

      if (scrollY > 2500) {
            paragraph1.classList.add('animate-paragraph1');
            contactBtn.classList.add('animate-contact');
      } else {
            paragraph1.classList.remove('animate-paragraph1');
            contactBtn.classList.remove('animate-contact');
      }
})

document.addEventListener('scroll', () => {
      if (scrollY > 2400) {
            paragraph.classList.add('animate-paragraph');
            h1.classList.add('animate-h1');
      } else {
            paragraph.classList.remove('animate-paragraph');
            h1.classList.remove('animate-h1');
      }
})

/* ********************************* */
/* A N I M A T I O N  O N  L O G O S */
/* ********************************* */

const logo = document.querySelector('.logo');
let navigationLinks = document.querySelectorAll('nav ul li a');
let nav = document.querySelector('nav');


document.addEventListener('scroll', () => {

      if (scrollY > 2900) {
            logo.setAttribute('src', './assets/dark-bg.svg')
            navigationLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'rgba(0,0,0, .7)';
            nav.style.transition = '.5s';
      }
})

document.addEventListener('scroll', () => {

      if (scrollY > 500) { //  && scrollY < 2500
            logo.setAttribute('src', './assets/white-bg.svg')
            navigationLinks.forEach(el => el.style.color = 'var(--pri-den-gray-100)')
            nav.style.backgroundColor = 'rgba(255,255,255, .7)';
      } else {
            logo.setAttribute('src', './assets/dark-bg.png')
            navigationLinks.forEach(el => el.style.color = 'white')
            nav.style.backgroundColor = 'transparent';
            square.forEach(el => el.style.animation = 'slide-back .5s ease-in forwards');
      }
})



/* ********************************* */
/* A N I M A T I O N  O N  C A R D S */
/* ********************************* */


const test = document.querySelectorAll('#phase1');
const test1 = document.querySelectorAll('#phase2');
const test2 = document.querySelectorAll('#phase3');
const test3 = document.querySelectorAll('#phase4');




document.addEventListener('scroll', () => {

      if (scrollY > 600 && scrollY < 1300) {
            test.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 1000 && scrollY < 1600) {
            test1.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test1.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 1200 && scrollY < 1900) {
            test2.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test2.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})
document.addEventListener('scroll', () => {

      if (scrollY > 1700 && scrollY < 2400) {
            test3.forEach(el => el.style.animation = 'slide-in .2s ease-in forwards');
      } else {
            test3.forEach(el => el.style.animation = 'slide-back .2s ease-in forwards');
      }
})


/* ********************************* */
/* A N I M A T I O N  O N  F O O T E R */
/* ********************************* */

const monuntain1 = document.querySelector('#mountain1')
const monuntain2 = document.querySelector('#mountain2')
const monuntain3 = document.querySelector('#mountain3')


document.addEventListener('scroll', () => {
      if (scrollY > 2700) {
            monuntain1.classList.add('mountain1-animation');
            monuntain2.classList.add('mountain2-animation');
            monuntain3.classList.add('mountain3-animation');
      } else {
            monuntain1.classList.remove('mountain1-animation');
            monuntain2.classList.remove('mountain2-animation');
            monuntain3.classList.remove('mountain3-animation');
      }
})