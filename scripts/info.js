var data;

fetch('info.json').then((result) => {
	return result.json();
}).then((result) => {
	data = result;
}).then(() => {
	console.log(data);
});

function showInfo(num) {
	if (num == 'close') {
		document.getElementById('black-layer').style.opacity = 0;
		document.getElementById('black-layer').style.zIndex = -10000;
		return ;
	}

	document.getElementById('info-para').innerText = data['info'][num].info;
	document.getElementById('info-time').innerText = data['info'][num].duration;
	document.getElementById('info-location').innerText = data['info'][num].location;
	document.getElementById('mail-button').href = "mailto:bookings@juniatourism.com?subject=[Booking] - " + data['info'][num].title + "&body=Hi, I'd like to enquire about the " + data['info'][num].title + " for the date of *fill date here*"

	document.getElementById('black-layer').style.opacity = 1;
	document.getElementById('black-layer').style.zIndex = 10000;
}