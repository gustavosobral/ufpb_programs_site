var teamDialogTemplate = require('./teamDialog.template.html');

/* @ngInject */
function CurriculaController($log, $filter, $mdDialog, $mdMedia, DataService) {
  var vm = this;
  vm.curricula = [];

  vm.querySearch = querySearch;
  vm.goProgram = goProgram;
  vm.showTeamDialog = showTeamDialog;
  vm.cancelTeamDialog = cancelTeamDialog;

  activate();

  function activate() {
    return getCurricula().then(function() {
      $log.info('Activated Curricula View');
    });
  }

  function getCurricula() {
    return DataService.getCurricula()
      .then(function(data) {
        vm.curricula = data;
        for (var i = vm.curricula.length - 1; i >= 0; i--) {
          vm.curricula[i].name = vm.curricula[i].name.split(" -")[0];
          vm.curricula[i].faculty = vm.curricula[i].faculty.split(" (")[0];
        };
        return vm.curricula;
    });
  }

  function querySearch (query) {
    return $filter('filter')(vm.curricula, query);
  }

  function goProgram() {
    if(vm.selectedItem) {
      $log.info('Item clicked: ' + vm.selectedItem.id);
    } else {
      $log.info('None item selected');
    }
  }

  function showTeamDialog() {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
    $mdDialog.show({
      controller: CurriculaController,
      controllerAs: 'curricula',
      templateUrl: teamDialogTemplate,
      parent: angular.element(document.body),
      clickOutsideToClose: true,
      fullscreen: useFullScreen
    });
  }

  function cancelTeamDialog() {
    $mdDialog.cancel();
  };
}

module.exports = CurriculaController;
