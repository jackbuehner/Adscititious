// JavaScript Document
var newHash     = '',
   $mainContent = $('#content');

$('nav').delegate('a', 'click', function() {
	window.location.hash = $(this).attr('href');
	return false;
});

// Not all browsers support hashchange
// For older browser support: http://benalman.com/projects/jquery-hashchange-plugin/
$(window).bind('hashchange', function() {
	newHash = window.location.hash.substr(1);
	$mainContent.load(newHash + " #content > *");
});


//jQuery(function($){
//   switch(window.location.href){
//      case "/index.html":  $(".home_container").addClass("visible"); break;
//      case "bod":  $(".popup").addClass("class2"); break;
//      case "ptf":  $(".popup").addClass("class3"); break;
//   }
//});