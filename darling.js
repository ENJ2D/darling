// Script for the navigation bar
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('nav ul');

	burger.addEventListener('click', () => {
		nav.classList.toggle('nav-active');
	});
}

navSlide();
