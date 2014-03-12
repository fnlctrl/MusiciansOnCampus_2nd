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

