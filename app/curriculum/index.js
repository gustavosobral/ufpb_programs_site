var angular  = require('angular');
var uiRouter = require('angular-ui-router');

var services = require('services');

var curriculum = angular.module('ufpbPrograms.curriculum', [
  services, uiRouter
]);

var CurriculumController = require('./curriculum.controller.js');
curriculum.controller('CurriculumController', CurriculumController);

curriculum.config(Routes);

var curriculumTemplate = require('./curriculum.template.html');
/* @ngInject */
function Routes($stateProvider) {
  $stateProvider
    .state('curriculum', {
      url: '/curriculum/{id:[0-9]{6,7}}',
      templateUrl: curriculumTemplate,
      controller: 'CurriculumController',
      controllerAs: 'curriculumCtrl'
    });
}

module.exports = curriculum.name;
