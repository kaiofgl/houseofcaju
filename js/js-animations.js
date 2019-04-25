var speed = 300;

$(".navbar-shop").hover(function() {
	$(".navbar-shop ul li a").css('display', 'block');	
	$(".navbar-shop ul li a").animate({
		opacity: "1"
	},speed, function() {
	});
}, function() {

	$(".navbar-shop ul li a").animate({
		opacity: "0"
	},speed, function() {
		var aux = setTimeout(function() {
			$(".navbar-shop ul li a").css('display', 'none');	
		}, speed);
	});
});