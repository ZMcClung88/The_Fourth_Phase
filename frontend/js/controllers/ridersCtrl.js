angular.module("myApp").controller("ridersCtrl", function($scope, mainSrvc) {

  //////////////// OPEN MENU MODAL //////////////////
  $("#riders_right_header").on("click", function() {
    console.log("clicky click!!!!");
    $("#riders_main_wrapper").hide();
    $("#riders-menu-modal").show();
  });

  //////////////// CLOSE MENU MODAL WITH RIDERS LINK //////////////////
  $("#riders-btn").on("click", function() {
    $("#riders-menu-modal").hide();
    $("#riders_main_wrapper").show();
  })

  //////////////// CLOSE MENU MODAL WITH MENU CLOSE BUTTON//////////////////
  $("#menu-close").on("click", function() {
    $("#riders-menu-modal").hide();
    $("#riders_main_wrapper").show();
  })

  $scope.getRiders = () => {
    mainSrvc.getRiders().then(response => {
      $scope.riders = response;
      console.log($scope.riders);
    })
  };
  $scope.getRiders();

})
