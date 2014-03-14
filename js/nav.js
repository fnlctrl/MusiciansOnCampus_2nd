$(window).bind('load',function () {
	//Scroll left or right by clicking arrows
	$('#arrowRight').click(function() {
		$('html,body').animate({scrollLeft:anchor[window.currentPage+1]},500)
		if (currentPage < anchor.length-1) {
			window.currentPage ++
		}
		$(this).find('polygon').css('fill',window.color)
		console.log(window.currentPage)
	})
	$('#arrowLeft').click(function() {
		$('html,body').animate({scrollLeft:anchor[window.currentPage-1]},500)
		window.currentPage --
		$(this).find('polygon').css('fill',window.color)
		console.log(window.currentPage)
	})
	//Fast navigate to groups
	$('.nav').click(function() {
		var destination = $(this).attr('data')
		$('html,body').animate({scrollLeft:navAnchor[destination]},500)
	})
})

