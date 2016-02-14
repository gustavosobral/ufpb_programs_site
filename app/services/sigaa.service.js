/* @ngInject */
function SigaaService($http, $log) {
  var url = 'http://ufpb-sigaa-api.herokuapp.com/api/curricula';

  return {
    getCurricula: getCurricula,
    getCurriculum: getCurriculum
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

  function getCurriculum(id) {
    return $http.get(url + '/' + id)
      .then(getCurriculumComplete)
      .catch(getCurriculumFailed);

    function getCurriculumComplete(response) {
      var curriculum = response.data.curriculum;
      var courses = curriculum.courses;
      var temp = [];
      for (var i = courses.length - 1; i >= 0; i--) {
        if(temp[courses[i].semester]){
          temp[courses[i].semester].push(courses[i]);
        } else {
          temp[courses[i].semester] = [courses[i]];
        }
      };
      temp.shift();
      curriculum.courses = temp;
      return curriculum;
    }

    function getCurriculumFailed(error) {
      $log.error('Failed for getCurriculum' + error.data);
    }
  }
}

module.exports = SigaaService;
