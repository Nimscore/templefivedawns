$(document).ready(function() {

// скролл вверх выбранного итема меню
$(".select").click(function(){
	$("html,body").animate({
		scrollTop: 0
}, 200);
});  
// скролл вверх выбранного итема меню

// аккордеон начало
$(".accordion").click(function(){
	if($(".panel").css('display') == 'none')
	{
		$(".panel").slideDown(200);
	}
	else {
		$(".panel").slideUp(200);
	}
});  
// аккордеон конец


$(".mobHeaderDots").click(function(){
	
	$(".mobHeaderDots").css("display", "none");
	$(".mobHeaderDotsHide").css("display", "block");
	// $("#footer-mob").css("display", "none");
	$(".container").css("marginTop", "11vw");

});

$(".mobHeaderDotsHide").click(function(){
	
	$(".mobHeaderDots").css("display", "block");
	$(".mobHeaderDotsHide").css("display", "none");
	// $("#footer-mob").css("display", "block");
	$(".container").css("marginTop", "0%");

});


$(".mobHeaderDots").click(function(){
	$(".popup").animate({
		width: "70vw"
}, 150);

$(".popupBackground").animate({
	width: "100%"
}, 150);


$(".popup-menu").fadeIn(150);

$("#header-mob").css("display", "none");
$("#popup-header-mob").css("display", "block");

});


$(".mobHeaderDotsHide").click(function(){
	$(".popup").animate({
		width: "0%"
}, 150);

$(".popupBackground").animate({
	width: "0%"
}, 150);


$(".popup-menu").fadeOut(150);

$("#header-mob").css("display", "block");
$("#popup-header-mob").css("display", "none");

});


$(".popupBackground").click(function(){
	$(".popup").animate({
		width: "0%"
}, 150);

$(".popupBackground").animate({
	width: "0%"
}, 150);


$(".popup-menu").fadeOut(150);

$(".mobHeaderDots").css("display", "block");
	$(".mobHeaderDotsHide").css("display", "none");
	$(".container").removeClass("fixed");

	$("#header-mob").css("display", "block");
$("#popup-header-mob").css("display", "none");

});

$(".mobHeaderDots").click(function(){
	
	$(".container").addClass("fixed");

});

$(".mobHeaderDotsHide").click(function(){
	
	$(".container").removeClass("fixed");

});






// $(".WW").hover(function(){
// 	$(".WWbrush").animate({
// 		width: "13vw"
// }, 300);


// });

// $(".WW").mouseleave(function(){
// 	$(".WWbrush").animate({
// 		width: "0"
// }, 300);


// });


$(".WW").hover(function(){
	$(".WWbrush").fadeIn();


});

$(".WW").mouseleave(function(){
	$(".WWbrush").fadeOut();

});




$(".MW").hover(function(){
	$(".MWbrush").fadeIn();


});

$(".MW").mouseleave(function(){
	$(".MWbrush").fadeOut();

});




$(".Support").hover(function(){
	$(".Supportbrush").fadeIn();


});

$(".Support").mouseleave(function(){
	$(".Supportbrush").fadeOut();

});






// анимация попапа
// $(".mobHeaderDots").click(function(){
// 		$(".popup").animate({
// 			width: "toggle"
// 	}, 150);
// });
// анимация попапа

// работа попапа
// $(".mobHeaderDots").click(function(){
// 		$(".container").toggleClass("fixed");
// });


// $(".mobHeaderDots").click(function(){
// 	if($(".popup").css('display') == 'block')
// 	{
// 		$(".container").addClass("fixed");
// 	}
// 	else {
// 		$(".container").removeClass("fixed");
// 	}
// });



// работа попапа

// трай свапа хэдера
// $(".mobHeaderDots").click(function(){
// 	if($("#header-mob").attr('display') == 'block')
// 	{
// 		$("#popup-header-mob").attr('display', 'block');
// 		$("#header-mob").attr('display', 'none');
// 	}
// 	else {
// 		$("#header-mob").attr('display', 'block');
// 		$("#popup-header-mob").attr('display', 'none');
// 	}
// });

// $(".mobHeaderDots").click(function(){
// 	if($(".popup").css('display') == 'block')
// 	{
// 		$("#popup-header-mob").css("display", "block");
// 		$("#header-mob").css("display", "none");
// 	}
// 	else if ($(".popup").css('display') == 'none') {
// 		$("#header-mob").css("display", "block");
// 		$("#popup-header-mob").css("display", "none");
// 	}
// });






// трай свапа хэдера

// скрытие попапа по попапу
// $(".popup").click(function(){
// 	$(".popup").css("display", "none");
// });
// скрытие попапа по попапу

// $(".mobHeaderDots").click(function(){
// 	if($(".popup").css('display') == 'none')
// 	{
// 		$(".container").css("position", "auto");
// 		$(".popup").animate({
// 			width: "toggle"
// 	}, 150);
// 	}
// 	else {
// 		$(".container").css("position", "fixed");
// 		$(".popup").animate({
// 			width: "toggle"
// 	}, 150);
// 	}
// });

});
