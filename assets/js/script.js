const SECOND_HAND = document.querySelector('.second-hand');

function setDate() {
	let now = new Date();
	let seconds = now.getSeconds();
	let secondsInDegrees = (seconds / 60) * 360 + 90;
	SECOND_HAND.style.transform = `rotate(${secondsInDegrees}deg)`;
}

setInterval(setDate, 1000);
