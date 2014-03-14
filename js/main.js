$(document).ready(function() {
	//Replace all SVG images with inline SVG
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgStyle = $img.attr('style');
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
			// Add replaced image's style to the new SVG
			if(typeof imgStyle !== 'undefined') {
				$svg = $svg.attr('style', imgStyle);
			}
			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');
			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
	//
	$(window).bind('load resize scroll',function() {
		//Set width and height
		window.h = $(window).height()
		window.w = $(window).width()
		$('.page').height(h)
		$('.pageContent').height(0.9*h)
		$('.intro').height(0.8*h)
		$('#page0').width(w)
		$('#background').width(w)
		$('#background').height(h)
		var bodyWidth = 0
		$('.page').each(function() {
			bodyWidth += $(this).outerWidth()
		})
		$('body').width(bodyWidth+10)
		//Detect current page and group
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
			if ($(window).scrollLeft() > anchor[i]-20) {
				window.currentPage = i
			}
		}
		for (var i=0,len=navAnchor.length;i<len;i++) {
			if ($(window).scrollLeft() > navAnchor[i]-20) {
				window.currentGroup = i
			}
		}
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
		//Move player according to how much the page is scrolled
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
		//Detect current page and group
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
			if ($(window).scrollLeft() > anchor[i]-20) {
				window.currentPage = i
			}
		}
		for (var i=0,len=navAnchor.length;i<len;i++) {
			if ($(window).scrollLeft() > navAnchor[i]-20) {
				window.currentGroup = i
			}
		}
		//Set background color of nav according to current group
		$('.nav').each(function() {
			if ( window.currentGroup == $(this).attr('data') ) {
				var color = $(this).css('border-top-color')
				$(this).css('background-color',color)
			}
			else {
				$(this).css('background-color','')
			}
		})
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
		//Switch background music according to current group
		if (window.currentGroup==0){
			if (window.currentTrack!=0) {
				$('#audio').animate({volume:0},1000)	
				$('#audio').prop('src','./mp3/最初的梦想.mp3')
				document.getElementById('audio').play()
				$('#audio').animate({volume:0.2},1000)
				window.currentTrack=0
			}
			$('#playerSongName').text(window.musicTitle[currentTrack])
			$('#player').find('path').css('fill','#E3087B')
			$('#playerSongName').css('color','#E3087B')
		}
		else if (window.currentGroup==1) {
			if (window.currentTrack!=1) {
				$('#audio').animate({volume:0},1000)
				$('#audio').prop('src','./mp3/无赖.mp3')
				document.getElementById('audio').play()
				$('#audio').animate({volume:0.2},1000)
				window.currentTrack=1
			}
			$('#playerSongName').text(window.musicTitle[currentTrack])
			$('#player').find('path').css('fill','#2980B9')
			$('#playerSongName').css('color','#2980B9')
		}
		else if (window.currentGroup==4) {
			if (window.currentTrack!=2) {
				$('#audio').animate({volume:0},1000)
				$('#audio').prop('src','./mp3/Spark.mp3')
				document.getElementById('audio').play()
				$('#audio').animate({volume:0.2},1000)
				window.currentTrack=2
			}
			$('#playerSongName').text(window.musicTitle[currentTrack])
			$('#player').find('path').css('fill','#C24704')
			$('#playerSongName').css('color','#C24704')
		}
	})
	//Animation at first page load
	$(window).bind('load',function () {
		$('#background').width(0)
	//	$('#stripes').hide()
		function pageInit() {
			$('#background').animate({width:w},800)
			document.getElementById('audio').play()
			stripesAnimation()
		}
		function stripesAnimation() {
			$('#stripes path').attr('class','stripesPath')
	//		$('#stripes').show()
		}
		$('body').animate({opacity:1},1600,pageInit)
	})
})


