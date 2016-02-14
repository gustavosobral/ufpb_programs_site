require('assets/scss/components/curriculum-flowchart.scss');

var curriculumFlowchartTemplate = require('./curriculum-flowchart.template.html');

/* @ngInject */
function CurriculumFlowchartComponent() {
  return {
    restrict: 'E',
    templateUrl: curriculumFlowchartTemplate,
    controller: CurriculumFlowchartComponentController,
    controllerAs: 'component',
    bindToController: true,
    scope: {
      curriculum: '='
    }
  }

  function CurriculumFlowchartComponentController() {
    this.hoverCourse = null;
    this.onHoverCourse = onHoverCourse;
    this.isPrerequisite = isPrerequisite;
    this.isNext = isNext;

    function onHoverCourse(course) {
      this.hoverCourse = course;
    }

    function isPrerequisite(course) {
      return _isPrerequisite(this.hoverCourse, course);
    }

    function isNext(course) {
      return _isPrerequisite(course, this.hoverCourse);
    }

    function _isPrerequisite(course, preCourse) {
      if (!course) return false;

      var is = false;
      course.prerequisites.forEach(function (prereqId) {
        is = prereqId == preCourse.id;
        if (!is) return;
      });

      return is;
    }
  }
}

module.exports = CurriculumFlowchartComponent;
