'use strict';

var myApp = angular.module('myApp', ['ngRoute', 'hpControllers']);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'partials/index.html',
        controller: 'IndexCtrl'
    }).when('/index.html', {
        templateUrl: 'partials/index.html',
        controller: 'IndexCtrl'
    }).otherwise({
        redirectTo: '/404'
    });

    $routeProvider.when('/about.html', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
    }).when('/sylke-scheduikat', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
    });

    $routeProvider.when('/services.html', {
        templateUrl: 'partials/services.html',
        controller: 'ServicesCtrl'
    }).when('/angebote-und-anwendungen', {
        templateUrl: 'partials/services.html',
        controller: 'ServicesCtrl'
    }).when('/angebote/:slug', {
        templateUrl: 'partials/partial_services.html',
        controller: 'ServiceDetailCtrl'
    });

    $routeProvider.when('/gallery.html', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryCtrl'
    }).when('/bilder-und-fotos', {
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryCtrl'
    });

    $routeProvider.when('/partner.html', {
        templateUrl: 'partials/partner.html',
        controller: 'PartnerCtrl'
    }).when('/partner', {
        templateUrl: 'partials/partner.html',
        controller: 'PartnerCtrl'
    });

    $routeProvider.when('/contact.html', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
    }).when('/kontakt', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
    });

    $routeProvider.when('/etikette.html', {
        templateUrl: 'partials/etikette.html'
    }).when('/etikette', {
        templateUrl: 'partials/etikette.html'
    });

    $routeProvider.when('/impressum', {
        templateUrl: 'partials/impressum.html'
    });

    $routeProvider.when('/404', {
        templateUrl: 'partials/404.html'
    });
    //$routeProvider.otherwise({
    //    redirectTo: '/404'
    //});

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
