(function(angular) {
  'use strict';
  var app = angular.module('app', ['app2']);
	
  app.controller('IndexController', ['$scope', '$filter', 'indexLoader', function($scope, $filter, indexLoader) {
	  $scope.faculties = indexLoader.faculties;
	  $scope.programs = indexLoader.programs;

    $scope.pageSize = 5;
    $scope.currentPage = 0;
	  $scope.facultyFilter =  {id:'', name:'Centros'};
    $scope.textFilter = '';

	  $scope.inc = function inc() {
    	$scope.currentPage = this.currentPage + 1;
  	};

  	$scope.dec = function dec() {
    	$scope.currentPage = this.currentPage - 1;
  	};

    $scope.setFacultyFilter = function setFacultyFilter(c) {
      $scope.facultyFilter = c;
    }

    $scope.getData = function () {
      var subset = $filter('filter')($scope.programs, $scope.textFilter);
      return $filter('filter')(subset, $scope.facultyFilter.id);
    }
	}]);

  app.filter('startFrom', function() {
    return function(input, start) {
      start = +start;
      return input.slice(start);
    }
  });
})(window.angular);