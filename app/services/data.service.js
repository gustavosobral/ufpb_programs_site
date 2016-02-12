/* @ngInject */
function DataService($http, $log) {
  var url = 'http://ufpb-sigaa-api.herokuapp.com/api/curricula';

  return {
    getCurricula: getCurricula
  };

  function getCurricula() {
    return $http.get(url)
      .then(getCurriculaComplete)
      .catch(getCurriculaFailed);

    function getCurriculaComplete(response) {
      var curricula = response.data.curricula;
      for (var i = curricula.length - 1; i >= 0; i--) {
        curricula[i].name = curricula[i].name.split(" -")[0];
        curricula[i].faculty = curricula[i].faculty.split(" (")[0];
      };
      return curricula;
    }

    function getCurriculaFailed(error) {
      $log.error('Failed for getCurricula' + error.data);
    }
  }
}

module.exports = DataService;
