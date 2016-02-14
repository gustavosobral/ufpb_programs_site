var angular = require('angular');

var curriculumFlowchart = angular.module('ufpbPrograms.components.curriculumFlowchart', []);

var CurriculumFlowchartComponent = require('./curriculum-flowchart.component.js');
curriculumFlowchart.directive('curriculumFlowchart', CurriculumFlowchartComponent);

module.exports = curriculumFlowchart.name;
