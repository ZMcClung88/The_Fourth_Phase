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


})
