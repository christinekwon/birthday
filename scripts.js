function initGallery() {
	const IMG_COUNT = 25;
	const gallery = document.querySelector('.gallery');
	for (let i = 0; i < IMG_COUNT; i++) {
		const imgEl = document.createElement('img');
		imgEl.classList.add('gallery__item');
		imgEl.src = `src/${i}.jpeg`;
		gallery.append(imgEl);
	}
}

function initCountdown() {
	const MS_PER_DAY = 1000 * 60 * 60 * 24;
	const MS_PER_HOUR = 1000 * 60 * 60;
	const MS_PER_MIN = 1000 * 60;
	const countdown = document.querySelector('.js-countdown');
	const currentDate = new Date();
	const eventDate = new Date('September 14, 2024 020:00:00');

	const diff = eventDate - currentDate;

	let days, hours, minutes;
	days = Math.floor(diff / MS_PER_DAY);
	hours = Math.floor((diff - days * MS_PER_DAY) / MS_PER_HOUR);
	minutes = Math.floor(
		(diff - days * MS_PER_DAY - hours * MS_PER_HOUR) / MS_PER_MIN
	);

	countdown.innerText = `${days} day${days == 1 ? '' : 's'} ${hours} hour${
		hours == 1 ? '' : 's'
	} ${minutes} minute${minutes == 1 ? '' : 's'}`;
}

window.addEventListener('DOMContentLoaded', () => {
	initGallery();
	initCountdown();
});
