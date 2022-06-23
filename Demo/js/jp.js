$('span').click(function() {
	$('.obx').css("display", "block");
	$('.box4').css("display", "block");
});
$('.qd').click(function() {
	$('.obx').css("display", "none");
	$('.box4').css("display", "none");
	$('.box5').css("display", "none");
})

	var mm1 = document.querySelector('.mm1');
	var mm2 = document.querySelector('.mm2');
$('.box211 .btn').click(function() {
	mm1.value = '';
	$('.ts1').css("opacity","0");
	$('.obx').css("display", "block");
	$('.ma').css('display', 'block');
	$('.ma .mm1').css("display","block");
	$('.left').click(function() {
		if(mm1.value == 123) {
			$('.obx').css("display", "none");
			$('.ma1').css("display", "none");
			$('.ma .mm1').css("display","none");
			$('.box211 .btn').html('已兑奖');
			$(".box211 .btn").unbind();
		} else {
			$('.ts1').css("opacity", "1")
		}
	})
})
$('.box212 .btn').click(function() {
	
	mm2.value = '';
	$('.ts1').css("opacity","0");
	$('.obx').css("display", "block");
	$('.ma').css('display', 'block');
	$('.ma .mm2').css("display","block");
	$('.left').click(function() {
		if(mm2.value == 456) {
			$('.obx').css("display", "none");
			$('.ma2').css("display", "none");
			$('.ma .mm2').css("display","none");
			$('.box212 .btn').html('已兑奖');
			$(".box212 .btn").unbind();
		} else {
			$('.ts1').css("opacity", "1")
		}
	})
})
$('.right').click(function() {
	$('.obx').css("display", "none");
	$('.ma').css("display", "none");
	$('.ma input').css("display","none")
	mm1.value = '';
	mm2.value = '';
})