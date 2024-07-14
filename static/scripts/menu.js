function openMenu() {
	console.log('switched');
	if (document.getElementById('hamburger').style.display == 'flex')
		document.getElementById('hamburger').style.display = 'none';
	else
		document.getElementById('hamburger').style.display = 'flex';
}