angular.module('myApp').controller('crewCtrl', function($scope, mainSrvc) {

  $("#follow-name").on("click", function() {
    console.log("working!!!!");
  });

  $scope.getCrew = () => {
    mainSrvc.getCrew().then(response => {
      $scope.crew = response
      console.log($scope.crew);
    })
  };
  $scope.getCrew();



})
