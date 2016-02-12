var teamDialogTemplate = require('./team-dialog.template.html');

/* @ngInject */
function TeamDialogService($mdDialog, $mdMedia, TeamDialogController) {
	var vm = this;
	vm.open = open;

	function open() {
		var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: TeamDialogController,
      controllerAs: 'teamDialog',
      templateUrl: teamDialogTemplate,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
	}
}

module.exports = TeamDialogService;