const SECOND_HAND = document.querySelector('.second-hand');
const MIN_HAND = document.querySelector('.min-hand');
const HOUR_HAND = document.querySelector('.hour-hand');

function setDate() {
	let now = new Date();
	let seconds = now.getSeconds();
	let secondsInDegrees = ((seconds / 60) * 360) + 90;
	let secondsNow = secondsInDegrees

	if (secondsInDegrees === 90) {
		SECOND_HAND.style.transition = 'all 0.00s'
	}

	SECOND_HAND.style.transform = `rotate(${secondsInDegrees}deg)`;

	let minutes = now.getMinutes();
	let minutesInDegrees = ((minutes / 60) * 360) + 90;
	MIN_HAND.style.transform = `rotate(${minutesInDegrees}deg)`;

	let hours = now.getHours();
	let hoursInDegrees = ((hours / 60) * 360) + 80;
	HOUR_HAND.style.transform = `rotate(${hoursInDegrees}deg)`;

}

setInterval(setDate, 1000);
