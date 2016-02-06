var angular = require('angular');
var CurriculaController = require('./curricula_controller.js')

var curricula = angular.module('ufpbPrograms.curricula', []);

curricula.controller('CurriculaController', CurriculaController);

module.exports = curricula;
