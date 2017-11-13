angular.module('myApp').controller('crewCtrl', function($scope, mainSrvc) {

  $scope.getCrew = () => {
    mainSrvc.getCrew().then(response => {
      $scope.crew = response
      console.log($scope.crew);
    })
  };
  $scope.getCrew();

})
