var theLang;
$(document).ready(function() {
	if ($.cookie('langPref')) {
		changeLang($.cookie('langPref'));
	} else {
		changeLang('lang_en');
	}
	$('#languager a').click(function(e){
		e.preventDefault();
		changeLang($(this).attr('class'));
	});
});
function changeLang(lang){
	theLang = lang;
	$.cookie('langPref', theLang, { path: '/'}); //$.cookie('the_cookie', 'the_value', { expires: 7 });
	$('*[class*="lang_"]').not('.' + theLang).not('#languager *').hide();
	$('.' + theLang).show();
}
