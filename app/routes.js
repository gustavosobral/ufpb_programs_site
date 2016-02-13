var curriculaTemplate = require('curricula/curricula.template.html');
var curriculumTemplate = require('curriculum/curriculum.template.html');

/* @ngInject */
function Routes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('curricula', {
      url: "/",
      templateUrl: curriculaTemplate,
      controller: 'CurriculaController',
      controllerAs: 'curriculaCtrl'
    })
    .state('curriculum', {
      url: "/curriculum/{id:[0-9]{6,7}}",
      templateUrl: curriculumTemplate,
      controller: 'CurriculumController',
      controllerAs: 'curriculumCtrl'
    })
}

module.exports = Routes;
