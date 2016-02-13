/* @ngInject */
function CurriculaController($log, $filter, $state, SigaaService, TeamDialogService) {
  var vm = this;
  vm.curricula = [];

  vm.querySearch = querySearch;
  vm.goProgram = goProgram;
  vm.showTeamDialog = showTeamDialog;

  activate();

  function activate() {
    return getCurricula().then(function() {
      $log.info('Activated Curricula View');
    });
  }

  function getCurricula() {
    return SigaaService.getCurricula()
      .then(function(curricula) {
        vm.curricula = curricula;
    });
  }

  function querySearch (query) {
    return $filter('filter')(vm.curricula, query);
  }

  function goProgram() {
    if(vm.selectedItem) {
      $state.go('curriculum', { id: vm.selectedItem.id });
    }
  }

  function showTeamDialog() {
    TeamDialogService.open();
  }
}

module.exports = CurriculaController;
