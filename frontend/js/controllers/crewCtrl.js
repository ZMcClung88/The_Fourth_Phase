angular.module('myApp').controller('crewCtrl', function($scope, mainSrvc) {

  $("#crew_right_header").on("click", function() {
    console.log("working!!!!");
    $("#crew-header").hide();
    $("#crew-wrapper").hide();
    $("#crew-modal").show();
  });

  $("#crew-btn").on("click", function() {
    $("#crew-modal").hide();
    $("#crew-header").show();
    $("#crew-wrapper").show();
  });

  $("#menu-close").on("click", function() {
    $("#crew-modal").hide();
    $("#crew-header").show();
    $("#crew-wrapper").show();
  });


  $scope.getCrew = () => {
    mainSrvc.getCrew().then(response => {
      $scope.crew = response
      console.log($scope.crew);
    })
  };
  $scope.getCrew();



})
