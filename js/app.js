'use strict';


let timeline = new TimelineMax()

timeline
	.from(document.querySelector('.logo__u'), 2, {
		y: -30
	})
	.from(document.querySelector('.logo__r'), 2, {
		rotation: 18, 
		transformOrigin: '100% 50%'
	}, '-=1.5')
	.from(document.querySelector('.logo__i'), 2, {
		y: 100
	}, '-=1.5')	
	.from(document.querySelector('.logo__t-bottom'), 2, {
		y: -100
	}, '-=1.5')	
	.from(document.querySelector('.logo__y'), 2, {
		y: 100
	}, '-=2')	