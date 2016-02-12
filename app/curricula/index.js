var angular = require('angular');
var services = require('services');
var teamDialog = require('components/team-dialog');
var curricula = angular.module('ufpbPrograms.curricula', [services, teamDialog]);

var CurriculaController = require('./curricula.controller.js')
curricula.controller('CurriculaController', CurriculaController);

module.exports = curricula.name;
