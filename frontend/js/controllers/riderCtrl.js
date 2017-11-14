angular.module("myApp").controller("riderCtrl", function($scope, $stateParams) {

  $scope.test = "is this thing working yet?";
  console.log($stateParams.id);
  
})
