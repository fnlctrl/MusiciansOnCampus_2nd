$(document).ready(function() {
	//
	$('#background').hide()
	$('#stripes').hide()
	function show() {
		$('#background').show('slow')
		$('#stripes').show('slow')
	}
	$('body').animate({opacity:1},1600,show)
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
	//
	$(window).bind('load resize scroll',function() {
		window.h = $(window).height()
		window.w = $(window).width()
		$('.page').height(h)
		$('.pageContent').height(0.9*h)
		$('#page0').width(w).height(h)

		var scale = h/650
		$('.article').css('-webkit-transform','scale('+scale+')')
		$('#nav').css('top',h-50)
			$('.pageContent[scale=true]').each(function () {
				var imgWidth = $(this).find('img').first().outerWidth(true)
				var articleWidth = $(this).find('.article').first().outerWidth(true)
				$(this).width(imgWidth+articleWidth*scale+1000*scale)
			})
		//是否显示左箭头
		if ($(window).scrollLeft() > window.w-10 ) {
			$('#svg_arrowLeft').show()
		}
		else {
			$('#svg_arrowLeft').hide()
		}
		//检测页面位置
		window.anchor = []
		anchor[0]=0
		for (var i=0,len=$('.page').length;i<len;i++) {
			anchor.push($('.page').eq(i).offset().left)
		}
		for (var i=0,len=$('.page').length;i<len;i++) {
			if ( ($(window).scrollLeft() < 	anchor [i+1] + 1) & ($(window).scrollLeft() > anchor[i] -1)) {
				window.currentPage = i
			}
			console.log(window.currentPage)
		}
	})
	//滚动页面
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
	//导航栏
})
//播放器移动
$(window).bind('load scroll resize',function() {
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
//音乐播放器
$(document).ready(function() {
	var playing = true
	var i = 0
	document.getElementById('audio').volume = 0
	$('#playerPlayPause').click(function() {
		if (playing == true) {
			document.getElementById('audio').pause()
			playing = false
			$(this).css('background','url(./img/playerControls.svg)')
		}
		else {
			document.getElementById('audio').play()
			playing = true
			$(this).css('background','url(./img/playerControls.svg) -20px -1px')
		}
	})
	$('#playerMute').click(function() {
		if (document.getElementById('audio').muted == false) {
			document.getElementById('audio').muted = true
			$(this).css('background','url(./img/playerControls.svg) -80px -1px')
		}
		else {
			document.getElementById('audio').muted = false
			$(this).css('background','url(./img/playerControls.svg) -60px -1px')
		}
	})
	$('#playerNext').click(function() {
		var src=[], name=[]
		src[0] = "./mp3/最初的梦想.mp3"
		src[1] = "./mp3/无赖.mp3"
		src[2] = "./mp3/Spark.mp3"
		name[0] = "最初的梦想"
		name[1] = "无赖"
		name[2] = "Spark"
		i++
		if (i>src.length-1) {
			i=0
		}
		$('#audio').prop('src',src[i])
		$('#playerSongName').text(name[i])
	})
})
