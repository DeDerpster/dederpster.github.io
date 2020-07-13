let last_known_scroll_position = 0;
let ticking = false;

function makeDefaultTheme() {
	var links = document.getElementsByTagName("link");
	var oldlink = links.item(1);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", "css/defaultStyle.css");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var oldlink = links.item(3);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", "css/defaultNavbar.css");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	if (page == "index.html") {
		var oldlink = links.item(5);
		var newlink = document.createElement("link");
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", "css/defaultIndex.css");

		document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}
	setCookie("theme", 0, 100);
}

function makeDarkTheme() {
	var links = document.getElementsByTagName("link");
	var oldlink = links.item(1);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", "css/darkStyle.css");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var oldlink = links.item(3);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", "css/darkNavbar.css");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var path = window.location.pathname;
	var page = path.split("/").pop();
	console.log(page);
	if (page == "index.html") {
		var oldlink = links.item(5);
		var newlink = document.createElement("link");
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", "css/darkIndex.css");

		document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}
	setCookie("theme", 1, 100);
}

function makeLightTheme() {
	var links = document.getElementsByTagName("link");
	console.log(links);
	var oldlink = links.item(1);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", "css/lightStyle.css");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var oldlink = links.item(3);

	var newlink = document.createElement("link");
	newlink.setAttribute("rel", "stylesheet");
	newlink.setAttribute("type", "text/css");
	newlink.setAttribute("href", "css/lightNavbar.css");

	document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);

	var path = window.location.pathname;
	var page = path.split("/").pop();
	if (page == "index.html") {
		var oldlink = links.item(5);
		var newlink = document.createElement("link");
		newlink.setAttribute("rel", "stylesheet");
		newlink.setAttribute("type", "text/css");
		newlink.setAttribute("href", "css/lightIndex.css");

		document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}
	setCookie("theme", 2, 100);
}

function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(";");
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == " ") {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function checkPosition(scroll_pos) {
	if (scroll_pos == 0) {
		document.getElementById("navbar").style.boxShadow = "none";
		document.getElementById("aboutMe").style.boxShadow = "none";
	} else {
		document.getElementById("navbar").style.boxShadow = "0 0 18px rgba(0, 0, 0, 0.6)";
		document.getElementById("aboutMe").style.boxShadow = "2px -9px 6px rgba(0, 0, 0, 0.6)";
	}
}

window.addEventListener("scroll", function (e) {
	last_known_scroll_position = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function () {
			checkPosition(last_known_scroll_position);
			ticking = false;
		});

		ticking = true;
	}
});

var theme = getCookie("theme");
if (theme == "1") {
	makeDarkTheme();
} else if (theme == "2") {
	makeLightTheme();
} else {
	makeDefaultTheme();
}
