const button1 = document.querySelector('#btn1');
const button2 = document.querySelector('.btn2');

function handleClick() {
	console.log('Click 1');
}
function add() {
	console.log(2 + 2);
}
button1.addEventListener('click', handleClick);
button2.addEventListener('click', add);
