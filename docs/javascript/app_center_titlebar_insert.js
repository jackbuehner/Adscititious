// JavaScript Document
$(document).ready(function(){
	$("<topnav><div><header>App Center</header></div><nav><a href='app_center_home2.html#home' id='home'>Home </a><a href='app_center_UWP apps.html#UWPapps' id='UWPapps'>UWP Apps </a><a href='app_center_win32.html#win32' id='win32'>Classic Apps </a><a href='app_center_games.html#games' id='games'>Games </a><a href='app_center_browsers.html#browsers' id='browsers'>Browsers </a><a href='app_center_framework.html#framework' id='framework'>Frameworks &amp; Extensions </a></nav><select onChange='window.location.href=this.value'><option value='app_center_home2.html#home'>Home</option><option value='app_center_UWP apps.html#UWPapps'>UWP Apps</option><option value='app_center_win32.html#win32'>Classic Apps</option><option value='app_center_games.html#games'>Games</option><option value='app_center_browsers#browsers'>Browsers</option><option value='app_center_framework.html#framework'>Frameworks &amp; Extensions</option><option value='learn_to_install#help'>Help</option></select><nav class='navright'><a href='learn_to_install.html#help' id='help'>Help</a></nav><back><a href='#' onclick='history.back();return false'><img src='images/back.svg' alt='' class='back'></a></back></topnav><borders><bordertop></bordertop><borderbottom></borderbottom><borderleft></borderleft><borderright></borderright></borders>").insertBefore("body>div");
	$("body>div").css("padding-top","108px")
	restoreTheme()
});