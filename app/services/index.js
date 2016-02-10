var angular = require('angular');
var services = angular.module('ufpbPrograms.services', []);

var DataService = require('./data.service.js')
services.factory('DataService', DataService);

module.exports = services.name;