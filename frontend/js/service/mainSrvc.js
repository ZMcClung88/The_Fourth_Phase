angular.module("myApp").service("mainSrvc", function($http) {
  this.name = "Zac McClung";

  this.getRiders = () => {
    return $http({
      method: 'GET',
      url: 'api/riders'
    }).then(response => response.data)
  },

  this.getCrew = () => {
    return $http({
      method: 'GET',
      url: 'api/crew'
    }).then(response => response.data);
  }
})
