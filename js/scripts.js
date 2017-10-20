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