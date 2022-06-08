$('span').click(function() {
	$('.obx').css("display", "block");
	$('.box4').css("display", "block");
});
$('.qd').click(function() {
	$('.obx').css("display", "none");
	$('.box4').css("display", "none");
	$('.box5').css("display", "none");
})
var x = 3;
$('.ks').click(function () {
	x--;
	if (x<0) {
		x=3;
		$('.obx').css("display", "block");
		$('.box5').css("display", "block");
	}
	$('b').html(x);
})