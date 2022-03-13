$(document).ready(function () {
	var video = document.getElementById('background-video');
	setTimeout(function () {
		video.play();
	}, 1000);

	$(window).scroll(function () {
		// sticky navbar on scroll script
		if (this.scrollY > 325) {
			$('.navbar').addClass('sticky');
			$('.menu').addClass('sticky');
		} else {
			$('.navbar').removeClass('sticky');
			$('.menu').removeClass('sticky');
		}

		// play-pause button show/hide script
		if (this.scrollY > 10) {
			$('.play-pause-btn').addClass('hide');
		} else {
			$('.play-pause-btn').removeClass('hide');
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
		} else {
			video.play();
		}
	});

	// play-pause script
	var playPause = document.getElementsByClassName('play-pause-btn')[0];
	playPause.addEventListener('click', function () {
		if (video.paused) {
			video.play();
			playPause.classList.toggle('pause');
			playPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
		} else {
			video.pause();
			playPause.classList.toggle('pause');
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
		$('html').css('scrollBehavior', 'smooth');
	});

	// toggle menu/navbar script
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass('active');
		$('.menu-btn i').toggleClass('active');
		$('.play-pause-btn').toggleClass('hide');
	});

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
