(function(angular) {
  'use strict';
angular.module('app2', [])
  .factory('indexLoader',  ['$http', function($http) {
    return {
      faculties: [{id:'', name:'Todos'},
      					{id:'1', name:'CT'},
      					{id:'2', name:'CCEN'},
      					{id:'3', name:'CI'},
      					{id:'4', name:'CCJ'},
      					{id:'5', name:'CCM'}],
      programs: [{name:'Ciência da Computação', faculty:'3'},
      					{name:'Matemática', faculty:'2'},
      					{name:'Direito', faculty:'4'},
      					{name:'Medicina', faculty:'5'},
      					{name:'Engenharia Elétrica', faculty:'1'},
      					{name:'Engenharia da Computação', faculty:'3'},
      					{name:'Matemática Computacional', faculty:'3'},
      					{name:'Engenharia Mecânica', faculty:'1'}]
    };
  }]);
})(window.angular);