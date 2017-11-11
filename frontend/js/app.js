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
})
