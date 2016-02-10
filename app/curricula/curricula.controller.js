/* @ngInject */
function CurriculaController($log, $filter, DataService) {
  var vm = this;
  vm.curricula = [];
  vm.querySearch = querySearch;
  vm.click = click;

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

  function click() {
    if(vm.selectedItem) {
      $log.info('Item clicked: ' + vm.selectedItem.id);
    } else {
      $log.info('None item selected');
    }
  }
}

module.exports = CurriculaController;
