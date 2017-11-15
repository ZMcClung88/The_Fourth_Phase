angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/dist/views/home.html',
      controller: 'mainCtrl'
    })
    .state('riders', {
      url: '/riders',
      templateUrl: '/dist/views/riders.html',
      controller: 'ridersCtrl'
    })
    .state('rider', {
      url: '/rider/:id',
      templateUrl: '/dist/views/singleRider.html',
      controller: 'singleRiderCtrl'
    })
    .state('crew', {
      url: '/crew',
      templateUrl: '/dist/views/crew.html',
      controller: 'crewCtrl'
    })
    .state('purchase', {
      url: '/purchase',
      templateUrl: '/dist/views/purchase.html'
    })
})
