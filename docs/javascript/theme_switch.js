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
	if (theme=="light") {
		//alert("dark");
		lightTheme();
	} else {
		//alert("light");
		darkTheme();
	}
}
//dark theme changes
function darkTheme() {
	document.body.style.setProperty("--sideNavBackground", "rgb(33,33,33)");
	document.body.style.setProperty("--bodyBackgroundColor", "rgb(17,17,17)");
	document.body.style.setProperty("--appbodyBackgroundColor", "rgb(46,46,46)");
	document.body.style.setProperty("--appbarBackgroundColor", "rgb(50,50,50)");
	document.body.style.setProperty("--sideNavItemBackgroundHover", "rgb(64,64,64)");
	document.body.style.setProperty("--bodyTextColor", "rgb(238,238,238)");
	document.body.style.setProperty("--showLight", "inherit");
	document.body.style.setProperty("--showDark", "none");
	document.body.style.setProperty("--themeButton", "rgb(33,33,33)");
	document.body.style.setProperty("--invertImage100", "invert(100%)");
	document.body.style.setProperty("--regTextColor", "rgb(189,189,189)");
	document.body.style.setProperty("--subTextColor", "rgb(130,130,130)");
	document.body.style.setProperty("--imageButtons", "invert(94%) hue-rotate(190deg) saturate(320%)");
	document.body.style.setProperty("--appCardBackground", "rgb(31,31,31)");
	document.body.style.setProperty("--appCardBackgroundHover", "rgb(0,0,0)");
	document.body.style.setProperty("--appCardTextColor", "rgb(255,255,255)");
	document.body.style.setProperty("--pageButtonHover", "rgb(33,33,33)");
	document.cookie="theme=dark; max-age=31536000;";
	document.cookie="theme=light; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
//light theme changes
function lightTheme() {
	document.body.style.setProperty("--sideNavBackground", "rgb(230,230,230)");
	document.body.style.setProperty("--bodyBackgroundColor", "rgb(255,255,255)");
	document.body.style.setProperty("--appbodyBackgroundColor", "rgb(240,240,240)");
	document.body.style.setProperty("--appbarBackgroundColor", "rgb(236,236,236)");
	document.body.style.setProperty("--sideNavItemBackgroundHover", "rgb(199,199,199)");
	document.body.style.setProperty("--bodyTextColor", "rgb(17,17,17)");
	document.body.style.setProperty("--showLight", "none");
	document.body.style.setProperty("--showDark", "inherit");
	document.body.style.setProperty("--themeButton", "rgb(230,230,230)");
	document.body.style.setProperty("--invertImage100", "invert(0%)");
	document.body.style.setProperty("--regTextColor", "rgb(33,33,33)");
	document.body.style.setProperty("--subTextColor", "rgb(92,92,92,)");
	document.body.style.setProperty("--imageButtons", "none");
	document.body.style.setProperty("--appCardBackground", "rgb(250,250,250)");
	document.body.style.setProperty("--appCardBackgroundHover", "rgb(255,255,255)");
	document.body.style.setProperty("--appCardTextColor", "rgb(17,17,17)");
	document.body.style.setProperty("--pageButtonHover", "rgb(230,230,230)");
	document.cookie="theme=light";
	document.cookie="theme=dark; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

//active vs inactive - titlebar
$(window).on("blur focus", function(e) {
var prevType = $(this).data("prevType");

if (prevType != e.type) {   //  reduce double fire issues
	switch (e.type) {
		case "blur":
			$("focuscolor").css("color", "#888");
			$("topnav>div>header").css("color", "#888");
			$("buttonfocuscolor").css("opacity", ".5");
			$("window_buttons").css("opacity", ".5");
			$("html").css("border-color", "#373737");
			$("borderC").css("border-color", "#373737");
			$("border_c").css("border-color", "#373737");
			$("buttonfocuscolor").css("border-color", "#373737");
			$("borderCB").css("background-color", "#373737");
			$("bordertop").css("background-color", "#373737");
			$("borderbottom").css("background-color", "#373737");
			$("borderleft").css("background-color", "#373737");
			$("borderright").css("background-color", "#373737");
			break;
		case "focus":
			$("focuscolor").css("color", "var(--bodyTextColor)");
			$("topnav>div>header").css("color", "var(--bodyTextColor)");
			$("buttonfocuscolor").css("opacity", "1");
			$("window_buttons").css("opacity", "1");
			$("html").css("border-color", "#0063B1");
			$("borderC").css("border-color", "#0063B1");
			$("border_c").css("border-color", "#0063B1");
			$("buttonfocuscolor").css("border-color", "#0063B1");
			$("borderCB").css("background-color", "#0063B1");
			$("bordertop").css("background-color", "#0063B1");
			$("borderbottom").css("background-color", "#0063B1");
			$("borderleft").css("background-color", "#0063B1");
			$("borderright").css("background-color", "#0063B1");
			break;
	}
}

$(this).data("prevType", e.type);
})



