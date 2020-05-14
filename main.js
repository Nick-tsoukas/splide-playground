


//  slider 2 
new Splide( '.splide', {
	type      : 'loop',
	perPage   : 3,
	height    : '15rem',
	cover     : true,
	breakpoins: {
		640: {
			height: '6rem',
		}
	}
} ).mount();