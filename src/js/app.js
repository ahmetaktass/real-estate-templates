const readMoreBtn = document.querySelector('.read-more-btn')
const text = document.querySelector('.text')
const modal = document.querySelector('.modal')
const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-btn')
const closeNavbar = document.querySelector('.nav-close-btn')
const mobileNav = document.querySelector('.mobile-nav')
const toogle = document.querySelector('.toogle')
const navLink = document.querySelector('.mobile-nav-link')
const toTop = document.querySelector('.to-top')

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 1000) {
    toTop.style.opacity = '1'
  } else {
    toTop.style.opacity = '0'
  }
})

readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('show-more')
})

openModal.addEventListener('click', () => {
  modal.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
  modal.style.display = 'none'
})

toogle.addEventListener('click', () => {
  mobileNav.style.display = 'block'
})

closeNavbar.addEventListener('click', () => {
  mobileNav.style.display = 'none'
})
navLink.addEventListener('click', () => {
  console.log('tıklandı')
  mobileNav.style.display = 'none'
})
$('.mobile-nav-link').each(function (index) {
  $(this).on('click', function () {
    mobileNav.style.display = 'none'
  })
})
