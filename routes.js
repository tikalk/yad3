Router.route('/', {
	name: 'home',
	action: function () {
		this.render('home');
	}
});

Router.route('/publish', {
	name: 'publish',
	action: function () {
		this.render('publish');
	}
});

Router.route('/search', {
	name: 'search',
	action: function () {
		this.render('search');
	}
});

Router.route('/apartment', {
	name: 'apartment',
	action: function () {
		this.render('apartment');
	}
});
