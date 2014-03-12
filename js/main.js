$(document).ready(function() {
	$(window).bind('load resize scroll',function() {
		//自适应高度
		window.h = $(window).height()
		window.w = $(window).width()
		$('.page').height(h)
		$('.pageContent').height(0.9*h)
		$('.intro').height(0.8*h)
		$('#page0').width(w).height(h)
		$('#navContainer').css('top',h-50)
		$('#background').height(h)
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
			if ($(window).scrollLeft() > anchor[i]-10) {
				window.currentPage = i
			}
		}
		for (var i=0,len=navAnchor.length;i<len;i++) {
			if ($(window).scrollLeft() > navAnchor[i]-10) {
				window.currentGroup = i
			}
		}
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
		console.log(window.currentPage+"　"+window.currentGroup)
		//切换BGM
		if (window.currentGroup==0){
			if (window.currentTrack!=0) {
				$('#audio').animate({volume:0},500)	
				$('#audio').prop('src','./mp3/最初的梦想.mp3')
				document.getElementById('audio').play()
				$('#audio').animate({volume:0.2},500)
				window.currentTrack=0
				$('#playerSongName').text(window.musicTitle[currentTrack])
			}
		}
		else if (window.currentGroup==1) {
			if (window.currentTrack!=1) {
				$('#audio').animate({volume:0},500)
				$('#audio').prop('src','./mp3/无赖.mp3')
				document.getElementById('audio').play()
				$('#audio').animate({volume:0.2},500)
				window.currentTrack=1
				$('#playerSongName').text(window.musicTitle[currentTrack])
			}
		}
		else if (window.currentGroup==4) {
			if (window.currentTrack!=2) {
				$('#audio').animate({volume:0},500)
				$('#audio').prop('src','./mp3/Spark.mp3')
				document.getElementById('audio').play()
				$('#audio').animate({volume:0.2},500)
				window.currentTrack=2
				$('#playerSongName').text(window.musicTitle[currentTrack])
			}
		}
	})
	//加载动画
	$(window).bind('load',function() {
		$('#background').width(0)
		function pageInit() {
			$('#background').animate({width:w},800)
			document.getElementById('audio').play()
		}
		$('body').animate({opacity:1},1600,pageInit)
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

