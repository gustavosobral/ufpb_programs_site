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
      return response.data.curricula;
    }

    function getCurriculaFailed(error) {
      $log.error('Failed for getCurricula' + error.data);
    }
  }
}

module.exports = DataService;