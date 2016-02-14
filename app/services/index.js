var angular = require('angular');

var services = angular.module('ufpbPrograms.services', []);

var SigaaService = require('./sigaa.service.js')
services.factory('SigaaService', SigaaService);

module.exports = services.name;
