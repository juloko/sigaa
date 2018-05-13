//Enable fields
setInterval(function () {
	$('div').find('input, button').prop('disabled', false);
	$('div').find('input, button').css("background", "white");
}, 100);

// Remove alerts.
location.href = "javascript: window.alert = function(x) {console.log(x)};"