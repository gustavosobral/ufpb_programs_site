var angular = require('angular');
var curriculum = angular.module('ufpbPrograms.curriculum', []);

var CurriculumController = require('./curriculum.controller.js');
curriculum.controller('CurriculumController', CurriculumController);

module.exports = curriculum.name;
