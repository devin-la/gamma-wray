
angular.module('GammaWray', ['ngRoute'])
	.config(function($routeProvider, $locationProvider){
		$routeProvider
			.when('/', {
				action: 'home',
				templateUrl: 'home.html'
			})
			.when('/teaser', {
				action: 'teaser',
				templateUrl: 'teaser.html'
			})
			.when('/trailer', {
				action: 'trailer',
				templateUrl: 'trailer.html'
			})
			.when('/film', {
				action: 'film',
				templateUrl: 'film.html'
			})
			.when('/story', {
				action: 'story',
				templateUrl: 'story.html'
			})
			.otherwise({
				redirectTo: '/'
			});

		$locationProvider.html5Mode(true);
	})

	.run(function($rootScope, $location, $route) {
		$rootScope.$on('$routeChangeSuccess', function ($currentRoute, $previousRoute) {
			$rootScope.page = 'page-' + $route.current.action;
		});
	});

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);