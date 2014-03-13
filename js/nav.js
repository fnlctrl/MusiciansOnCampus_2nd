$(window).bind('load resize scroll',function() {
	//是否显示左箭头
	if ($(window).scrollLeft() > window.w-10 ) {
		$('#arrowLeft').show()
	}
	else {
		$('#arrowLeft').hide()
	}
	//是否显示左右箭头
	if ($(window).scrollLeft() < $('body').width() - 2000 ) {
		$('#arrowRight').show()
	}
	else {
		$('#arrowRight').hide()
	}
	//左右箭头换颜色
	$('.arrow').each(function() {
		if (window.currentGroup == 0) {
			$(this).find('path').css('fill','#E6067C')
			$(this).find('polygon').css('fill','#FFF')
		}
		else if (window.currentGroup == 1) {
			$(this).find('path').css('fill','#2980B9')
			$(this).find('polygon').css('fill','#FFF')
		}
		else if (window.currentGroup == 2) {
			$(this).find('path').css('fill','#39B54A')
			$(this).find('polygon').css('fill','#FFF')
		}
		else if (window.currentGroup == 3) {
			$(this).find('path').css('fill','#EA2E49')
			$(this).find('polygon').css('fill','#FFF')
		}
		else if (window.currentGroup == 4) {
			$(this).find('path').css('fill','#C24704')
			$(this).find('polygon').css('fill','#FFF')
		}
		else if (window.currentGroup == 5) {
			$(this).find('path').css('fill','#00994C')
			$(this).find('polygon').css('fill','#FFF')
		}
	})
})
$(window).bind('load',function() {
	//左右方向按钮
	$('#arrowRight').click(function() {
		$('html,body').animate({scrollLeft:anchor[currentPage+1]},500)
		if (currentPage < anchor.length-1) {
			currentPage ++
		}
	//	console.log(window.currentPage)
	})
	$('#arrowLeft').click(function() {
		$('html,body').animate({scrollLeft:anchor[currentPage-1]},500)
		currentPage --
	//	console.log(window.currentPage)
	})
	//导航栏按钮
	$('.nav').click(function() {
		var destination = $(this).attr('data')
		$('html,body').animate({scrollLeft:navAnchor[destination]},500)
	})
	//左右箭头变色
	$('.arrow')
	.mouseenter(function() {
		var color = $(this).find('path').css('fill')
		$(this).find('polygon').css('fill',color)
	})
	.mouseleave(function() {
		$(this).find('polygon').css('fill','#FFF')
	})
})