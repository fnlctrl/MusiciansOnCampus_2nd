$(document).ready(function() {
	//加载动画
	$(window).bind('load',function () {
		$('#background').hide()
		$('#stripes').hide()
		function show() {
			$('#background').show('slow')
			$('#stripes').show('slow')
		}
		$('body').animate({opacity:1},1600,show)
	})
	//自适应高度
	$(window).bind('load resize scroll',function() {
		window.h = $(window).height()
		window.w = $(window).width()
		$('.page').height(h)
		$('.pageContent').height(0.9*h)
		$('.intro').height(0.8*h)
		$('#page0').width(w).height(h)
		$('#navContainer').css('top',h-50)
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
				var rgb = $(this).css('border-color').match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
				$(this).css('background-color','rgb('+rgb[1]+','+rgb[2]+','+rgb[3]+')')
			}
			else {
				$(this).css('background-color','')
			}
		})
		//播放器移动
		var playerInitialTop = parseInt($('#titleImage').css('top')) + 393
		var playerTopDelta = $(window).scrollLeft() / 2.5
		$('#player').css('top',playerInitialTop)
		if ( (playerInitialTop + playerTopDelta < window.h-110) & (window.h>570) ) {
			$("#player").css('top', playerInitialTop + playerTopDelta )
		}
		else if (window.h<570){
			$("#player").css('top',playerInitialTop)
		}
		else {
			$("#player").css('top',window.h-110)
		}
	})
	//导航栏
	$('.nav').click(function() {
		var destination = $(this).attr('data')
		$('html body').animate({scrollLeft:navAnchor[destination]},500)
	})
	//左右方向按钮
	$('#svg_arrowRight').click(function() {
		$('html body').animate({scrollLeft:anchor[currentPage+1]},500)
		currentPage ++
		console.log(window.currentPage)
	})
	$('#svg_arrowLeft').click(function() {
		$('html body').animate({scrollLeft:anchor[currentPage-1]},500)
		currentPage --
		console.log(window.currentPage)
	})
	//Replace all SVG images with inline SVG
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');
		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');
			// Add replaced image's ID to the new SVG
			if(typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass+' replaced-svg');
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});






})

