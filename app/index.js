var angular = require('angular');
var ngMaterial = require('angular-material');
var uiRouter = require('angular-ui-router');

require('angular-material/angular-material.css');
require('assets/scss/main.scss');

var curricula = require('curricula');
var services = require('services');

var Route = require('./routes.js');

var app = angular.module('ufpbPrograms', [
  curricula, services, ngMaterial, uiRouter
]);

app.config(Route);

/* @ngInject */
function SetTitle($rootScope) {
  $rootScope.APP_TITLE = 'UFPB Cursos';
}

app.run(SetTitle);
