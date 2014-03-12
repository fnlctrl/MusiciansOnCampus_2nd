$(window).bind('load resize scroll',function() {
	//是否显示左箭头
	if ($(window).scrollLeft() > window.w-10 ) {
		$('#svg_arrowLeft').show()
	}
	else {
		$('#svg_arrowLeft').hide()
	}
	//是否显示右箭头
	if ($(window).scrollLeft() < $('body').width() - 2000 ) {
		$('#svg_arrowRight').show()
	}
	else {
		$('#svg_arrowRight').hide()
	}
})
$(document).ready(function() {
	//左右方向按钮
	$('#svg_arrowRight').click(function() {
		$('html,body').animate({scrollLeft:anchor[currentPage+1]},500)
		if (currentPage < anchor.length-1) {
			currentPage ++
		}
	//	console.log(window.currentPage)
	})
	$('#svg_arrowLeft').click(function() {
		$('html,body').animate({scrollLeft:anchor[currentPage-1]},500)
		currentPage --
	//	console.log(window.currentPage)
	})
	//导航栏按钮
	$('.nav').click(function() {
		var destination = $(this).attr('data')
		$('html,body').animate({scrollLeft:navAnchor[destination]},500)
	})
})
