$(document).ready(function () {
	var playPause = document.getElementsByClassName('play-pause-btn')[0];
	var video = document.getElementById('background-video');
	var html = document.getElementsByTagName('html')[0];
	setTimeout(function () {
		video.play();
	}, 1000);

	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 350) {
			$('.navbar').addClass('sticky');
			$('.menu').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
			$('.menu').removeClass('sticky');
		}

		// play-pause button show/hide script
		if (this.scrollY > 10) {
			playPause.classList.add('hide');
			playPause.classList.add('shide');
		} else {
			playPause.classList.remove('hide');
			playPause.classList.remove('shide');
		}

		// scroll-up button show/hide script
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass('show');
		} else {
			$('.scroll-up-btn').removeClass('show');
		}

		// auto pause video on scroll script
		if (this.scrollY > 950) {
			video.pause();
		} else if (this.scrollY < 950 && $('.pause').length) {
			return;
		} else if (this.scrollY < 950 && !$('.pause').length) {
			video.play();
		}
	});

	// play-pause script
	playPause.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			playPause.classList.remove('pause');
			playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
		} else {
			video.pause();
			playPause.classList.add('pause');
			playPause.innerHTML = '<i class="fa-solid fa-play"></i>';
		}
	});

	// set footer
	$('#footer').html(
		'<p><i class="fa-regular fa-copyright"></i> ' +
			new Date().getFullYear() +
			' <a href="https://github.com/Tiramitzu">Syah Warid Ghani Akram</a>. all rights reserved.</p>'
	);

	// slide-up script
	$('.scroll-up-btn').click(function () {
		$('html').animate({ scrollTop: 0 });
		// removing smooth scroll on slide-up button click
		$('html').css('scrollBehavior', 'auto');
	});

	$('.navbar .menu li a').click(function () {
		// applying again smooth scroll on menu items click
		if (!html.classList.contains('overflow-hidden')) {
			$('html').remove('overflow-hidden');
			$('html').css('scrollBehavior', 'smooth');
		} else {
			$('html').css('scrollBehavior', 'smooth');
		}
	});

	// toggle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
		$('.menu-btn').toggleClass('active');
		if (playPause.classList.contains('shide')) {
			return;
		} else if (!playPause.classList.contains('shide') && playPause.classList.contains('hide')) {
			playPause.classList.remove('hide');
		} else if (!playPause.classList.contains('shide') && !playPause.classList.contains('hide')) {
			playPause.classList.add('hide');
		}
	});
	$('.menu-btn').click(function () {
		if (html.classList.contains('overflow-hidden')) {
			html.classList.remove('overflow-hidden');
			
		} else {
			html.classList.add('overflow-hidden');
		}
	})

	// owl carousel script
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeOut: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: false
			}
		}
	});
});
