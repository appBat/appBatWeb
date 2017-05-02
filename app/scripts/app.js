'use strict';

/**
 * @ngdoc overview
 * @name proyectoUApp
 * @description
 * # proyectoUApp
 *
 * Main module of the application.
 */
angular
  .module('proyectoUApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'angular-js-xlsx',  //llamado al  modulo de  excel 
    'angular-loading-bar' // llamado a modulo de  loading 
  ])
   .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true;
  }])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
        controller: 'UsuariosCtrl',
        controllerAs: 'usuarios'
      })
      .when('/baseObjetivos', {
        templateUrl: 'views/baseobjetivos.html',
        controller: 'BaseobjetivosCtrl',
        controllerAs: 'baseObjetivos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
