var angular = require('angular');
var services = require('services');
var curricula = angular.module('ufpbPrograms.curricula', [services]);

var CurriculaController = require('./curricula.controller.js')
curricula.controller('CurriculaController', CurriculaController);

module.exports = curricula.name;