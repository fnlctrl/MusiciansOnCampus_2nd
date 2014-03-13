$(window).bind('resize scroll', function() {
	if (document.getElementById('audio').paused == true) {
		window.playing = false
		$('#playerPlayPause').find('svg').css('left','0')
	}
	else {
		window.playing = true
		$('#playerPlayPause').find('svg').css('left','-19px')
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