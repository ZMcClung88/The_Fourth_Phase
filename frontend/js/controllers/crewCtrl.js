angular.module('myApp').controller('crewCtrl', function($scope, mainSrvc) {

  //////////////// OPEN MENU MODAL //////////////////
  $("#crew_right_header").on("click", function() {
    console.log("working!!!!");
    $("#crew-header").hide();
    $("#crew-wrapper").hide();
    $("#crew-modal").show();
  });

  //////////////// CLOSE MENU MODAL FROM CREW BUTTON //////////////////
  $("#crew-btn").on("click", function() {
    $("#crew-modal").hide();
    $("#crew-header").show();
    $("#crew-wrapper").show();
  });

  //////////////// CLOSE MENU MODAL FROM MENU CLOSE BUTTON //////////////////
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
