

$(".tops").click(()=>{

	window.scroll({
	  top: 0,
	  left: 0,
	  behavior: 'smooth'
	});

});

$(".menuphone").click(function(){
	$(".menup").css("transform", "translatex(0)");
});

$(".clm").click(function(){
	$(".menup").css("transform", "translatex(100%)");
});
