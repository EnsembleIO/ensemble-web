'use strict';

angular.module('ensembleWeb', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ngMaterial'])
  .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default');

    $mdIconProvider
    .iconSet('social', 'assets/images/icons/sets/social-icons.svg', 24)
    .iconSet('device', 'assets/images/icons/sets/device-icons.svg', 24)
    .iconSet('communication', 'assets/images/icons/sets/communication-icons.svg', 24)
    .defaultIconSet('assets/images/icons/sets/core-icons.svg', 24);
  })
;
