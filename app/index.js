var angular = require('angular');
var angular_material = require('angular-material');
var angular_ui_router = require('angular-ui-router');

var curricula = require('curricula');
var services = require('services');

var route = require('./routes.js');

var app = angular.module('ufpbPrograms', [
  curricula, services, angular_material, angular_ui_router
]);

app.config(route);

/* @ngInject */
function SetTitle($rootScope) {
  $rootScope.APP_TITLE = 'UFPB Programs';
}

app.run(SetTitle);
