$(window).bind('load scroll resize',function () {
	//Show or hide left arrow
	if ($(window).scrollLeft() > window.w-10 ) {
		$('#arrowLeft').show()
	}
	else {
		$('#arrowLeft').hide()
	}
	//Show or hide right arrow
	if ($(window).scrollLeft() < $('body').width() - 2000 ) {
		$('#arrowRight').show()
	}
	else {
		$('#arrowRight').hide()
	}
	//Hightlight arrows on hover
	$('.arrow')
	.mouseenter(function() {
		$(this).find('polygon').css('fill',$('.arrow').find('path').css('fill'))
	})
	.mouseleave(function() {
		$(this).find('polygon').css('fill','#FFF')
	})
	//Change color of arrow according to current group
	$('.arrow').each(function() {
		if (window.currentGroup == 0) {
			$(this).find('path').css('fill','#E6067C')
			if ($(this).is(":hover")) {
				$(this).find('polygon').css('fill','#E6067C')
			}
		}
		else if (window.currentGroup == 1) {
			$(this).find('path').css('fill','#2980B9')
			if ($(this).is(":hover")) {
				$(this).find('polygon').css('fill','#2980B9')
			}
		}
		else if (window.currentGroup == 2) {
			$(this).find('path').css('fill','#39B54A')
			if ($(this).is(":hover")) {
				$(this).find('polygon').css('fill','#39B54A')
			}
		}
		else if (window.currentGroup == 3) {
			$(this).find('path').css('fill','#EA2E49')
			if ($(this).is(":hover")) {
				$(this).find('polygon').css('fill','#EA2E49')
			}
		}
		else if (window.currentGroup == 4) {
			$(this).find('path').css('fill','#C24704')
			if ($(this).is(":hover")) {
				$(this).find('polygon').css('fill','#C24704')
			}
		}
		else if (window.currentGroup == 5) {
			$(this).find('path').css('fill','#00994C')
			if ($(this).is(":hover")) {
				$(this).find('polygon').css('fill','#00994C')
			}
		}
	})
})
$(window).bind('load',function () {
	//Scroll left or right by clicking arrows
	$('body').on('click','#arrowRight',function() {
		$('html,body').animate({scrollLeft:anchor[window.currentPage+1]},500)
		if (currentPage < anchor.length-1) {
			window.currentPage ++
		}
		$(this).find('polygon').css('fill',window.color)
		console.log(window.currentPage)
	})
	$('body').on('click','#arrowLeft',function() {
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

