/* @ngInject */
function CurriculumController($log, $stateParams, SigaaService) {
  var vm = this;
  vm.curriculum = [];

  activate();

  function activate() {
    return SigaaService.getCurriculum($stateParams.id)
      .then(function(curriculum) {
        vm.curriculum = curriculum;    
    });
  }
}

module.exports = CurriculumController;
