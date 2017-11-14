angular.module('myApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'mainCtrl'
    })
    .state('riders', {
      url: '/riders',
      templateUrl: '/views/riders.html',
      controller: 'ridersCtrl'
    })
    .state('rider', {
      url: '/rider/:id',
      templateUrl: 'views/rider.html',
      contoller: 'riderCtrl'
    })
    .state('crew', {
      url: '/crew',
      templateUrl: '/views/crew.html',
      controller: 'crewCtrl'
    })
    .state('purchase', {
      url: '/purchase',
      templateUrl: '/views/purchase.html'
    })
})
