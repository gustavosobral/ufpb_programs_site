/* @ngInject */
function CurriculaController($log, $filter, DataService, TeamDialogService) {
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
    return DataService.getCurricula()
      .then(function(curricula) {
        vm.curricula = curricula;
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
    TeamDialogService.open();
  }

}

module.exports = CurriculaController;
