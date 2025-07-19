// Back to Top Button
const backToTopButton = document.getElementById('backToTop')

window.addEventListener('scroll', () => {
	if (window.pageYOffset > 300) {
		backToTopButton.classList.remove('opacity-0', 'invisible')
		backToTopButton.classList.add('opacity-100', 'visible')
	} else {
		backToTopButton.classList.remove('opacity-100', 'visible')
		backToTopButton.classList.add('opacity-0', 'invisible')
	}
})

backToTopButton.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	})
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault()

		const targetId = this.getAttribute('href')
		const targetElement = document.querySelector(targetId)

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop - 80,
				behavior: 'smooth',
			})
		}
	})
})

// Form submission
const contactForm = document.querySelector('form')
if (contactForm) {
	contactForm.addEventListener('submit', function (e) {
		e.preventDefault()

		// Here you would typically send the form data to a server
		// For this example, we'll just show an alert
		alert('Спасибо за вашу заявку! Мы свяжемся с вами в ближайшее время.')

		// Reset the form
		this.reset()
	})
}

// Mobile menu toggle (would need additional HTML/CSS for full functionality)
const mobileMenuButton = document.querySelector('.md\\:hidden')
if (mobileMenuButton) {
	mobileMenuButton.addEventListener('click', function () {
		// This would toggle a mobile menu
		alert(
			'Мобильное меню будет открыто. В реальном проекте здесь появится навигация.'
		)
	})
}
