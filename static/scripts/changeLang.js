count = 0;

function changeLanguage() {
	left = (count - 1 < 0 ? 6 : count - 1);
	right = (count + 1 > 6 ? 0 : count + 1);
	
	list = document.getElementsByClassName('lang-wrap').item(left).classList.toggle('left');
	list = document.getElementsByClassName('lang-wrap').item(right).classList.toggle('right');
	list = document.getElementsByClassName('lang-wrap').item(count).classList.toggle('shown');

	count++;
	if (count == 7) {
		count = 0;
	}
	else if (count == 0) {
		count = 7;
	}
	left = (count - 1 < 0 ? 6 : count - 1);
	right = (count + 1 > 6 ? 0 : count + 1);

	list = document.getElementsByClassName('lang-wrap').item(left).classList.toggle('left');
	list = document.getElementsByClassName('lang-wrap').item(right).classList.toggle('right');
	list = document.getElementsByClassName('lang-wrap').item(count).classList.toggle('shown');
}