const menuBtn = document.querySelector('.header-nav__btn')
const menuList = document.querySelector('.header-nav__list')
const closeBtn = document.querySelector('.header-nav__close')

menuBtn.addEventListener('click', () => {
	menuList.classList.add('active')
	closeBtn.classList.add('active')
})
closeBtn.addEventListener('click', () => {
	menuList.classList.remove('active')
	closeBtn.classList.remove('active')
})