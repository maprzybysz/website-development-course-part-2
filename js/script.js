const sizeUp = document.querySelector('.size-up');
const sizeDown = document.querySelector('.size-down');
const color = document.querySelector('.color');
const p = document.querySelector('p');

let fontSize = 20;
function bigText() {
	fontSize += 5;
	p.style.fontSize = fontSize + 'px';
}
function smallText() {
	fontSize -= 5;
	p.style.fontSize = fontSize + 'px';
}
function changeText(name) {
	p.innerHTML = name;
}
function changeColor() {
	const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	p.style.color = color;
	changeText(color);
}

sizeUp.addEventListener('click', bigText);
sizeDown.addEventListener('click', smallText);
color.addEventListener('click', changeColor);
