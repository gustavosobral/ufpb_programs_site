var angular    = require('angular');
var uiRouter   = require('angular-ui-router');

var services   = require('services');
var curriculum = require('curriculum');
var teamDialog = require('components/team-dialog');

var curricula = angular.module('ufpbPrograms.curricula', [
  services, teamDialog, curriculum, uiRouter
]);

var CurriculaController = require('./curricula.controller.js')
curricula.controller('CurriculaController', CurriculaController);

curricula.config(Routes);

var curriculaTemplate = require('./curricula.template.html');
/* @ngInject */
function Routes($stateProvider) {
  $stateProvider
    .state('curricula', {
      url: '/',
      templateUrl: curriculaTemplate,
      controller: 'CurriculaController',
      controllerAs: 'curriculaCtrl'
    });
}

module.exports = curricula.name;
