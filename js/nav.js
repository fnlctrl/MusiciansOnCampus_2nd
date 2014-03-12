$(window).bind('load resize scroll',function() {
	//是否显示左箭头
	if ($(window).scrollLeft() > window.w-10 ) {
		$('#svg_arrowLeft').show()
	}
	else {
		$('#svg_arrowLeft').hide()
	}	
	//检测页面位置
	window.anchor = []
	window.navAnchor = []
	anchor[0]=0
	navAnchor[0]=0
	for (var i=0,len=$('.page').length;i<len;i++) {
		anchor.push($('.page').eq(i).offset().left)
	}
	for (var i=0,len=$('.intro').length;i<len;i++) {
		navAnchor.push($('.intro').eq(i).offset().left)
	}
	for (var i=0,len=anchor.length;i<len;i++) {
		if ($(window).scrollLeft() > anchor[i]-1) {
			window.currentPage = i
		}
	}
	for (var i=0,len=navAnchor.length;i<len;i++) {
		if ($(window).scrollLeft() > navAnchor[i]-1) {
			window.currentGroup = i
		}
	}
	console.log(window.currentPage+"　"+window.currentGroup)
	//检测导航栏当前值
	$('.nav').each(function() {
		if ( window.currentGroup == $(this).attr('data') ) {
			var rgb = $(this).css('border-top-color').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
			$(this).css('background-color','rgb('+rgb[1]+','+rgb[2]+','+rgb[3]+')')
		}
		else {
			$(this).css('background-color','')
		}
	})

})

$(document).ready(function() {
	//左右方向按钮
	$('#svg_arrowRight').click(function() {
		$('html,body').animate({scrollLeft:anchor[currentPage+1]},500)
		currentPage ++
		console.log(window.currentPage)
	})
	$('#svg_arrowLeft').click(function() {
		$('html,body').animate({scrollLeft:anchor[currentPage-1]},500)
		currentPage --
		console.log(window.currentPage)
	})
	//导航栏
	$('.nav').click(function() {
		var destination = $(this).attr('data')
		$('html,body').animate({scrollLeft:navAnchor[destination]},500)
	})
})
