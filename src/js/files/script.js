// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
import { isMobile } from "./functions.js";
import './spoiler.js'
window.onload = function(){
	if(window.innerWidth <768 && isMobile.any()){
		const menuBurger = document.querySelector('.menu__body');
		const menuIcon = document.querySelector('.icon-menu');
		menuIcon.addEventListener("click", function(e) {
			menuBurger.classList.toggle('_active')
			menuIcon.classList.toggle('_active')
		});
	}


	const anchors = document.querySelectorAll('a[href*="#"]')

	for (let anchor of anchors) {
	  anchor.addEventListener('click', function (e) {
		 e.preventDefault()
		 
		 const blockID = anchor.getAttribute('href').substr(1)
		 
		 document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		 })
	  })
	}

	
	const bid =document.querySelectorAll('.bid__contain-text');
	bid.forEach(element => {
		let titleBtn = document.querySelector('.contain__title')
		titleBtn.disabled = false
		titleBtn.addEventListener("click", function(e) {
			element.classList.toggle('_active')
			titleBtn.disabled = true
			setTimeout(() => {
				titleBtn.disabled = false
			}, 800);
		});
	});
}