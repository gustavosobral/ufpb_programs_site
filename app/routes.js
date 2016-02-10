var curriculaTemplate = require('./curricula/curricula.template.html');

/* @ngInject */
function Routes($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");

	$stateProvider
	  .state('curricula', {
      url: "/",
      templateUrl: curriculaTemplate,
      controller: 'CurriculaController',
      controllerAs: 'index'
	  })
}

module.exports = Routes;