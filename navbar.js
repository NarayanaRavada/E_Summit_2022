window.addEventListener('scroll', () => {
		var navbar = document.querySelector('.banner');
	if(window.scrollY > 100) {
		navbar.style.backgroundColor = "#111";
	} else {
		navbar.style.backgroundColor = "transparent";
	}
})
