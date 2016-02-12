var angular = require('angular');
var teamDialog = angular.module('ufpbPrograms.teamDialog', []);

var TeamDialogController = require('./team-dialog.controller.js')
teamDialog.controller('TeamDialogController', TeamDialogController);

var TeamDialogService = require('./team-dialog.service.js')
teamDialog.factory('TeamDialogService', TeamDialogService);

module.exports = teamDialog.name;