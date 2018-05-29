// JavaScript Document
//script to for checking cookies
function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
//script to view cookies
function alertCookie() {
  	alert(document.cookie);
}
//restore theme based on cookie
function restoreTheme() {
	var theme = getCookie("theme");
	if (theme=="dark") {
		//alert("dark");
		darkTheme();
	} else {
		//alert("light");
		lightTheme();
	}
}
//dark theme changes
function darkTheme() {
	document.body.style.setProperty("--sideNavBackground", "rgb(33,33,33)");
	document.body.style.setProperty("--bodyBackgroundColor", "rgb(17,17,17)");
	document.body.style.setProperty("--sideNavItemBackgroundHover", "rgb(64,64,64)");
	document.body.style.setProperty("--bodyTextColor", "rgb(238,238,238)");
	document.body.style.setProperty("--showLight", "inherit");
	document.body.style.setProperty("--showDark", "none");
	document.body.style.setProperty("--themeButton", "rgb(33,33,33)");
	document.body.style.setProperty("--invertImage100", "invert(100%)");
	document.body.style.setProperty("--regTextColor", "rgb(189,189,189)");
	document.body.style.setProperty("--imageButtons", "invert(96%) hue-rotate(190deg) saturate(320%)");
	document.cookie="theme=dark";
	document.cookie="theme=light; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
//light theme changes
function lightTheme() {
	document.body.style.setProperty("--sideNavBackground", "rgb(230,230,230)");		document.body.style.setProperty("--bodyBackgroundColor", "rgb(255,255,255)");
	document.body.style.setProperty("--sideNavItemBackgroundHover", "rgb(199,199,199)");
	document.body.style.setProperty("--bodyTextColor", "rgb(17,17,17)");
	document.body.style.setProperty("--showLight", "none");
	document.body.style.setProperty("--showDark", "inherit");
	document.body.style.setProperty("--themeButton", "rgb(230,230,230)");
	document.body.style.setProperty("--invertImage100", "invert(0%)");
	document.body.style.setProperty("--regTextColor", "rgb(33,33,33)");
	document.body.style.setProperty("--imageButtons", "none");
	document.cookie="theme=light";
	document.cookie="theme=dark; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}