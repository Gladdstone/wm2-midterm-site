function openMenu(elem) {
	elem.classList.toggle("change");
	openNav()
}

function openNav() {
	document.getElementById("mobilemenu").style.width = "250px";
}

function closeNav() {
	document.getElementById("mobile_menu_button").classList.toggle("change");
	document.getElementById("mobilemenu").style.width = "0";
}

function setYear() {
	alert("test");
	var today = new Date();
	var year = today.getFullYear();

	var text = document.getElementById("copyright").innerHTML;
	document.getElementById("copyright").innerText = text + " " + year;
}
