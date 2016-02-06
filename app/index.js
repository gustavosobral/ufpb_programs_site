var angular = require('angular');
var curricula = require('curricula');

var app = angular.module('ufpbPrograms', [
  curricula.name
]);

/* @ngInject */
function SetTitle($rootScope) {
  $rootScope.APP_TITLE = 'UFPB Programs';
}

app.run(SetTitle);
