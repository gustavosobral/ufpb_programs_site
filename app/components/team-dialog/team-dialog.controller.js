/* @ngInject */
function TeamDialogController($mdDialog) {
	var vm = this;
	vm.cancel = cancel;

	function cancel() {
    $mdDialog.cancel();
  };
}

module.exports = TeamDialogController;