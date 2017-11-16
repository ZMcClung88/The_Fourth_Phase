angular.module("myApp").controller("singleRiderCtrl", function($scope, $stateParams, mainSrvc) {

  $scope.getDetails = function() {
    console.log($stateParams.id);
    mainSrvc.getRiders().then(function(resp) {
      // console.log(resp);
      for(var i =0; i < resp.length; i++) {
        if(resp[i].id === parseInt($stateParams.id)) {
          $scope.rider = resp[i];
        }
      }
    })
  }

  $scope.getDetails();

  $("#single_riders_right_header").on("click", function(){
    $("#single_rider_wrapper").hide();
    $("#single-riders-menu-modal").show();
  });

  $("#menu-close").on("click", function() {
    $("#single_rider_wrapper").show();
    $("#single-riders-menu-modal").hide();
  });


})
