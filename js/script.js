const arrowIcon = document.querySelector('.fas');
const btn = document.querySelector('.arrow');
const img = document.querySelector('.item1');

function showImage() {
	img.classList.toggle('show');

	if (img.classList.contains('show')) {
		arrowIcon.style.transform = 'rotate(180deg)';
	} else {
		arrowIcon.style.transform = 'rotate(0)';
	}
}

btn.addEventListener('click', showImage);
