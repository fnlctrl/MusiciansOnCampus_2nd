$(window).bind('load resize scroll', function() {
	if (document.getElementById('audio').paused == true) {
		window.playing = false
		$('#playerPlayPause').find('svg').css('left','0')
	}
	else {
		window.playing = true
		$('#playerPlayPause').find('svg').css('left','-19px')
	}
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
$(document).ready(function() {
	window.currentTrack = 0
	document.getElementById('audio').volume = 0.2
	window.playing = true
	window.mp3=[]
	window.musicTitle=[]
	mp3[0] = "./mp3/最初的梦想.mp3"
	mp3[1] = "./mp3/无赖.mp3"
	mp3[2] = "./mp3/Spark.mp3"
	musicTitle[0] = "最初的梦想"
	musicTitle[1] = "无赖"
	musicTitle[2] = "Spark"
	$('#playerPlayPause').click(function() {
		if (playing == true) {
			document.getElementById('audio').pause()
			playing = false
			$('#playerPlayPause').find('.svg').css('left','0')
		}
		else {
			document.getElementById('audio').play()
			playing = true
			$('#playerPlayPause').find('.svg').css('left','-19px')
		}
	})
	$('#playerMute').click(function() {
		if (document.getElementById('audio').muted == false) {
			document.getElementById('audio').muted = true
			$(this).find('.svg').css('left','-81px')
		}
		else {
			document.getElementById('audio').muted = false
			$(this).find('.svg').css('left','-61px')
		}
	})
	$('#playerNext').click(function() {
		currentTrack++
		if (currentTrack>mp3.length-1) {
			currentTrack=0
		}
		$('#audio').prop('src',mp3[currentTrack])
		$('#playerSongName').text(window.musicTitle[currentTrack])
	})
})