angular.module("myApp").controller("ridersCtrl", function($scope, mainSrvc) {
  $scope.rider = "Zac McClung aka Mc-clang-a-lang-tang";

  $("#riders_right_header").on("click", function() {
    console.log("clicky click!!!!");
    $("#riders_main_wrapper").hide();
    $("#riders-menu-modal").show();
  });

  $("#riders-btn").on("click", function() {
    $("#riders-menu-modal").hide();
    $("#riders_main_wrapper").show();
  })

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
