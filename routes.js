Router.route('/', {
	name: 'home',
	layoutTemplate: 'main',
	action: function () {
		this.render('home');
	}
});

Router.route('/publish', {
	name: 'publish',
	layoutTemplate: 'main',
	action: function () {
		this.render('publish');
	}
});

Router.route('/search', {
	name: 'search',
	layoutTemplate: 'main',
	action: function () {
		this.render('search');
	}
});

Router.route('/searchResults', {
	name: 'searchResults',
	layoutTemplate: 'main',
	action: function () {
		this.render('searchResults', {
			data: function() {
				var queryParams = {queryParams: this.params.query}
				return queryParams;
			}
		});
	}
});

Router.route('/apartment', {
	name: 'apartment',
	layoutTemplate: 'main',
	action: function () {
		this.render('apartment');
	}
});
