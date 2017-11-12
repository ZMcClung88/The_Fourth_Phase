angular.module("myApp").controller("ridersCtrl", function($scope) {
  $scope.rider = "Zac McClung aka Mc-clang-a-lang-tang";

  $("#riders_right_header").on("click", function() {
    console.log("clicky click!!!!");
    $("#riders_main_wrapper").hide();
    $("#riders-menu-modal").show();
  })
})
