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
    'angular-js-xlsx'  //llamado al  modulo de  excel 
  ])
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
      .otherwise({
        redirectTo: '/'
      });
  });
