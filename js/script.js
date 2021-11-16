const passLength = 10;

if (passLength > 10) {
	console.log('Masz bardzo dobre hasło!');
} else if (passLength >= 5 && passLength <= 10) {
	console.log('Masz dobre hasło');
} else {
	console.log('Masz słabe hasło...');
}
