
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

	.run(function($rootScope, $location) {

		$rootScope.back = function() {
			$location.path('/');	
		};
		
		$rootScope.safeApply = function(fn) {
			var phase = this.$root.$$phase;
			if (phase == '$apply' || phase == '$digest') {
				if (fn && (typeof(fn) === 'function')) {
					fn($rootScope);
				}
			} else {
				this.$apply(fn);
			}
		};

	});

window.addEventListener('load', function() {
    FastClick.attach(document.body);
}, false);