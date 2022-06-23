$(function() {
	$('span').click(function() {
		$('.obx').css("display", "block");
		$('.box4').css("display", "block");
	});
	$('.qd').click(function() {
		$('.obx').css("display", "none");
		$('.box4').css("display", "none");
		$('.box5').css("display", "none");
		$('.box7').css("display", "none");
		$('.box7 div').css("display", "none");
	})
	$('.right').click(function() {
		$('.obx').css("display", "none");
		$('.box6').css("display", "none");
	})

	$('.left').click(function() {
		var name = document.querySelector('.name');
		var tel = document.querySelector('.tel');
		var re = /^1[34578]\d{9}$/;
		if(name.value =='') {
			$('.ts1').css("opacity", "1")
		}else{
			$('.ts1').css("opacity", "0")
		}
		if(re.test(tel.value) == false) {
			$('.ts2').css("opacity", "1")
		}else{
			$('.ts2').css("opacity", "0")
		}
		if(re.test(tel.value) == true && name.value != '') {
			$('.obx').css("display", "none");
			$('.box6').css("display", "none");
		}
	})
	var x = 3;
	var y = 4;
	var img = new Array("sudoku_01.jpg","sudoku_02.jpg","sudoku_03.jpg","sudoku_04.jpg","sudoku_05.jpg","sudoku_06.jpg","sudoku_07.jpg","sudoku_08.jpg");
	var xx = new Array("xx1","xx2","xx3","xx4","xx5","xx6","xx7","xx8");
	$('.ks').click(function() {
		x--;
		y--;
		var z = Math.floor(Math.random()*8);
		if(x < 0) {
			x = 0;
		}
		if (y>0) {
			$('.obx').css("display", "block");
			$('.box7').css("display", "block");
		}
		if (y <= 0) {
			$('.obx').css("display", "block");
			$('.box5').css("display", "block");
		}
		
		$('.box11 b').html(x);
		$('.box7 img').attr("src","img/"+img[z]+"");
		$('.'+xx[z]+'').css("display","block");
		if (z==7) {
			$('.box7 h2').html('很遗憾');
		}
	})
})