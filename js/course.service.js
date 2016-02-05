(function(angular) {
  'use strict';
angular.module('app2', [])
  .factory('courseLoader',  ['$http', function($http) {
    return {
      centers: [{id:'', name:'Todos'},
      					{id:'1', name:'CT'},
      					{id:'2', name:'CCEN'},
      					{id:'3', name:'CI'},
      					{id:'4', name:'CCJ'},
      					{id:'5', name:'CCM'}],
      courses: [{name:'Ciência da Computação', center:'3'},
      					{name:'Matemática', center:'2'},
      					{name:'Direito', center:'4'},
      					{name:'Medicina', center:'5'},
      					{name:'Engenharia Elétrica', center:'1'},
      					{name:'Engenharia da Computação', center:'3'},
      					{name:'Matemática Computacional', center:'3'},
      					{name:'Engenharia Mecânica', center:'1'}]
    };
  }]);
})(window.angular);