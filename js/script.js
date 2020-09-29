//event link
$('.page-scroll').on('click',function(e){


	//take
	var tujuan = $(this).attr('href');

	//tangkap

	var elemenTujuan = $(tujuan);

	//pindah scroll

	$('html').animate({
		scrollTop:elemenTujuan.offset().top-50
	},950,'easeInOutExpo');

	e.preventDefault();
});


// parallax

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	//jumbotron

	$('.jumbotron img').css({
		'transform':'translate(0px, '+wScroll/4+'%)'

	});
		$('.jumbotron h1').css({
		'transform':'translate(0px, '+wScroll/2+'%)'

	});
			$('.jumbotron p').css({
		'transform':'translate(0px, '+wScroll/1.2+'%)'

	});
});