/**
 * Presentation.js
 * Simple JavaScript Presentation Framework
 * Written by Nick Nisi
 * Written for NECFUG HTML 5 Talk
 **/

var prez = {
	numSlides : 0,
	currSlide : 0,
	init : function () {
		$('section.slide:first').show();
		this.currSlide = 0;
	},
	next : function () {
		if (this.currSlide < this.numSlides - 1) {
			++this.currSlide;
			this.showSlide();
		}
	},
	previous : function () {
		if (this.currSlide - 1 >= 0) {
			--this.currSlide;
			this.showSlide();
		}
	},
	showSlide : function () {
		$('section.slide').hide();
		$('section.slide:eq(' + this.currSlide + ')').show();
	}
};

jQuery(function () {
	prez.numSlides = $('section.slide').length;
	console.log('prez.numSlides = ' + prez.numSlides);
	$(document)
		.bind('mouseover.prez', function (e) {
			if (e.pageY < 150) {
				$('.deck header').fadeIn('fast');
			}
			else {
				$('.deck header').fadeOut('fast');
			}
		})
		.bind('keypress.prez', function (e) {
			console.log('key pressed: ' + e.which);
			switch (e.which) {
				// case 37: // left
				// case 38: // up
				case 112: // p
				prez.previous();
				break;
				// case 39: // right
				// case 40: // down
				case 110: // n
				case 32: // spacebar
				case 13: // enter
				prez.next();
				break;
			}
		});
	
	$('input').unbind('keypress.prez');
	
	$('section.slide').hide();
	prez.init();
});