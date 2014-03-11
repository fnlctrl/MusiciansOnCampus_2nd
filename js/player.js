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
