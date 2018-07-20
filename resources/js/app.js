document.addEventListener('DOMContentLoaded', () => {
	const scrolls = document.querySelectorAll('[data-scroll]');
	if (scrolls.length > 0) {
		Array.from(scrolls).forEach(scroll => {
			scroll.addEventListener('click', e => {
				e.preventDefault();
				const to = document.querySelector(scroll.dataset.scroll);
				if (to) {
					to.scrollIntoView({behavior: 'smooth'});
				}
			});
		});
	}
});
