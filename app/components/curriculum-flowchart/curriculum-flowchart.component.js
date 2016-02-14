require('assets/scss/components/curriculum-flowchart.scss');

var curriculumFlowchartTemplate = require('./curriculum-flowchart.template.html');

/* @ngInject */
function CurriculumFlowchartComponent() {
  return {
    restrict: 'E',
    templateUrl: curriculumFlowchartTemplate,
    controller: CurriculumFlowchartComponentController,
    controllerAs: 'curriculumFlowchartCtrl',
    bindToController: true,
    scope: {
      curriculum: '='
    }
  }

  function CurriculumFlowchartComponentController() {
    var vm = this;
    vm.hoverCourse = null;
    vm.onHoverCourse = onHoverCourse;
    vm.isPrerequisite = isPrerequisite;
    vm.isNext = isNext;

    function onHoverCourse(course) {
      vm.hoverCourse = course;
    }

    function isPrerequisite(course) {
      return _isPrerequisite(vm.hoverCourse, course);
    }

    function isNext(course) {
      return _isPrerequisite(course, vm.hoverCourse);
    }

    function _isPrerequisite(course, preCourse) {
      if (!course) return false;

      var is = false;
      course.prerequisites.forEach(function (prereqId) {
        if(preCourse){
          is = prereqId == preCourse.id;
          if (!is) return;
        }
      });

      return is;
    }
  }
}

module.exports = CurriculumFlowchartComponent;
