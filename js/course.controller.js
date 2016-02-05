(function(angular) {
  'use strict';
angular.module('app', ['app2'])
	.controller('CourseController', ['courseLoader', function(courseLoader) {
	  this.currentPage = 0;
	  this.centers = courseLoader.centers;
	  this.courses = courseLoader.courses;
	  this.filterCenter =  {id:'', name:'Centros'};

	  this.inc = function inc() {
    	this.currentPage = this.currentPage + 1;
    	alert(this.currentPage);
  	};
  	this.dec = function inc() {
    	this.currentPage = this.currentPage - 1;
    	alert(this.currentPage);
  	};
	}]);
})(window.angular);