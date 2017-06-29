(function() {

    'use strict';

    angular.module('cls').config(configuration);

    configuration.inject = ['$stateProvider', '$httpProvider', '$locationProvider'];

    function configuration($stateProvider, $httpProvider, $locationProvider) {
        //$urlRouterProvider.otherwise("/");
        $locationProvider.html5Mode(true);
        $stateProvider
          .state('login', {
              url: '/',
              controller: 'LoginController',
              controllerAs: 'loginVm',
              templateUrl: '/app/login/login.html'
          })
          .state('home', {
              url: '/home',
              controller: 'HomeController',
              controllerAs: 'homeVm',
              templateUrl: '/app/home/home.html'
          });
    }
})();
