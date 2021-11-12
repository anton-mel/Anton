$(document).ready(function(){

  setTimeout(function(){
    $(".loader h1").animate({opacity: 1}, 2000);
  }, 500);
  setTimeout(function(){
    $(".loader h1").animate({opacity: 0}, 1000);
  }, 3000);
  setTimeout(function(){
    $(".loader").animate({opacity: 0}, 1000);
    setTimeout(function(){
      $(".loader").hide();
    },1000);
  }, 4000);

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

});
