var angular    = require('angular');
var ngMaterial = require('angular-material');
var uiRouter   = require('angular-ui-router');

require('angular-material/angular-material.css');
require('assets/scss/main.scss');

var curricula = require('curricula');

var app = angular.module('ufpbPrograms', [
  curricula, ngMaterial, uiRouter
]);

app.config(Routes);

/* @ngInject */
function Routes($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}

app.run(SetTitle);

/* @ngInject */
function SetTitle($rootScope) {
  $rootScope.APP_TITLE = 'UFPB Cursos';
}
