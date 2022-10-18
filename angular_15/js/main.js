/***
Metronic AngularJS App Main Script
***/

/* Metronic App */
var app = angular.module("app", [
    "ui.router",
    "oc.lazyLoad",
    "ngSanitize",
    'ngCookies',
]);

/* Configure ocLazyLoader(refer: https://github.com/ocombe/ocLazyLoad) */
app.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        // global configs go here
        // debug: true
    });
}]);

/* Setup App Main Controller */
app.controller('AppController', ['$scope', '$rootScope', function($scope, $rootScope) {
}]);

/* Setup Layout Part - Header */
app.controller('HeaderController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.$on('$includeContentLoaded', function() {
        $('#pull').on('click' , function() {
            if ($('#mainmenu').is(':hidden')) {
                $('#mainmenu').slideDown('slow');
            } else {
                $('#mainmenu').slideUp('slow');
            }
        });
    });
    $scope.$state = $rootScope.$state;
}]);

/* Setup Layout Part - Footer */
app.controller('FooterController', ['$scope', function($scope) {
    $scope.$on('$includeContentLoaded', function() {
    });
}]);

/* Setup Layout Part - Footer */
app.controller('MainPageController', ['$scope', '$rootScope', '$http', function($scope, $rootScope, $http) {
    $scope.products = $rootScope.products;
    $scope.$on('$viewContentLoaded', function() {
        $(function () {

            //http://responsiveslides.com/
            $("#slider1").responsiveSlides({
                speed: 1500,
                fade: 500
            });
        });
    });
}]);

/* Setup Routing For All Pages */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    // Redirect any unmatched url
    //$urlRouterProvider.otherwise('/dashboard.html');
    $urlRouterProvider.when("", "/");
    //alte urls auf neue 
    $urlRouterProvider.when("/massagen.html", "/massagen");
    $urlRouterProvider.when("/kreide.html", "/ruegener-heilkreide");
    $urlRouterProvider.when("/entschlacken.html", "/sanft-entschlacken");
    $urlRouterProvider.when("/hotstone.html", "/hot-stone-therapie");
    $urlRouterProvider.when("/paare.html", "/fuer-paare");
    $urlRouterProvider.when("/ayurveda.html", "/ayurveda");
    $urlRouterProvider.when("/exotik.html", "/exotik-pur");
    $urlRouterProvider.when("/kosmetik.html", "/kosmetik");
    $urlRouterProvider.when("/naturheilpraxis.html", "/naturheilpraxis");
    $urlRouterProvider.when("/verwoehn.html", "/verwoehnprogramme");
    $urlRouterProvider.when("/contact.html", "/kontakt");
    $urlRouterProvider.when("/impressum.html", "/impressum");
    $urlRouterProvider.when("/sitemap.html", "/sitemap.html");
    $urlRouterProvider.when("/etikette.html", "/etikette");
    $urlRouterProvider.when("/gallery.html", "/bilder");
    $urlRouterProvider.when("/services.html", "/angebote-massagen-kosmetik-heilkreide");

    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('main', {
            abstract: true,
            url: "",
            templateUrl: "views/main.html"
        })
        .state('main.error', {
            url: "/404",
            templateUrl: "views/error.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            }
        })
        .state('main.start', {
            url: "/",
            templateUrl: "views/start.html",
            data: {
                pageTitle: 'Willkommen bei Heilpraktikerin Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            },
            controller: "MainPageController",
            controllerAs: "vm",
            resolve: {
                js: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'app',
                        insertBefore: '#ng_load_scripts_after', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'js/responsiveslides.min.js',
                            'js/lightbox.js'
                        ]
                    }
                    ]);
                }]
            }
        })
        .state('main.person', {
            url: "/person",
            templateUrl: "views/person.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            }
        })
        .state('main.contact', {
            url: "/kontakt",
            templateUrl: "views/contact.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            }
        })
        .state('main.impressum', {
            url: "/impressum",
            templateUrl: "views/impressum.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            }
        })
        .state('main.sitemap', {
            url: "/sitemap.html",
            templateUrl: "views/sitemap.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            }
        })
        .state('main.partner', {
            url: "/partner",
            templateUrl: "views/partner.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            }
        })
        .state('main.gallery', {
            url: "/bilder",
            templateUrl: "views/gallery.html",
            data: {
                pageTitle: 'Willkommen bei Sylke Scheduikat in Breege auf Rügen',
                pageDescription: 'Entspannen und wohlfühlen in der Massage und Naturheilpraxis auf Rügen. Das Motto von Heilpraktikerin Sylke Scheduikat lautet "Es ist immer der Mensch der wichtigste, den wir gerade behandeln".',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            },
            resolve: {
                js: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'app',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before a LINK element with this ID. Dynamic CSS files must be loaded between core and theme css files
                        files: [
                            'css/lightbox.css',
                            'js/lightbox.js'
                        ]
                    }
                    ]);
                }]
            }
        })
        .state('main.overview', {
            url: "/angebote-massagen-kosmetik-heilkreide",
            templateUrl: "views/services.html",
            data: {
                pageTitle: 'Angebote',
                pageDescription: 'Massagen, Kosmetik, Ayurveda, Exotik - Anwendungen und vieles mehr finden Sie in der Massage und Naturheilpraxis Rügen in Breege',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            },
            controller: function($rootScope, $scope, $stateParams, $state) {
                $scope.products = $rootScope.products;
            }
        })
        .state('main.category', {
            url: "/:alias",
            templateUrl: "views/category.html",
            data: {
                pageTitle: 'Angebote',
                pageDescription: 'Beschreibung',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, sylke, scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, sanddorn, rügener heilkreide'
            },
            controller: function($rootScope, $scope, $stateParams, $state) {
                $scope.category = {};
                $scope.products = $rootScope.products;
                for (var i = 0; i < $rootScope.products.length; i++) {
                    if ($rootScope.products[i].alias === $stateParams.alias) {
                        $scope.category = $rootScope.products[i];
                        $state.current.data.pageTitle = $rootScope.products[i].pageTitle;
                        $state.current.data.pageDescription = $rootScope.products[i].pageDescription;
                        $state.current.data.pageKeywords = $rootScope.products[i].pageKeywords;
                    }
                }
            }
        })
        .state('main.detail', {
            url: "/:alias/:slug",
            templateUrl: "views/detail.html",
            data: {
                pageTitle: 'Angebote',
                pageDescription: 'Beschreibung',
                pageKeywords: 'wellness, oase, rügen, breege, julusruh, kosmetik, heilkreide, romantik, massage, massagen, sylke scheduikat, naturheilpraxis, heilpraktiker, osteopathie, homöopathie, reiki, craniosacral, kreide, physiotherapie, dr spiller, craniosacrale therapie, ayurveda, rügener heilkreide'
            },
            controller: function($rootScope, $scope, $stateParams, $state) {
                $scope.product = {};
                $scope.category = {};
                $scope.products = $rootScope.products;
                for (var i = 0; i < $rootScope.products.length; i++) {
                    if ($rootScope.products[i].alias === $stateParams.alias) {
                        var category = $rootScope.products[i];
                        $scope.category = category;
                        for (var j = 0; j < category.services.length; j++) {
                            if (category.services[j].alias === $stateParams.slug) {
                                $scope.product = category.services[j];
                                $state.current.data.pageTitle = category.services[j].pageTitle;
                                $state.current.data.pageDescription = category.services[j].pageDescription;
                                $state.current.data.pageKeywords = category.services[j].pageKeywords;
                            }
                        }
                    }
                }
            }
        })
    ;

    $locationProvider.html5Mode({ enabled: true, requireBase: false });
}]);

app.directive('ngSpinnerBar', ['$rootScope',
    function($rootScope) {
        return {
            link: function(scope, element, attrs) {
                // by defult hide the spinner bar
                element.addClass('hide'); // hide spinner bar by default

                // display the spinner bar whenever the route changes(the content part started loading)
                $rootScope.$on('$stateChangeStart', function() {
                    element.removeClass('hide'); // show spinner bar
                });

                // hide the spinner bar on rounte change success(after the content loaded)
                $rootScope.$on('$stateChangeSuccess', function() {
                    element.addClass('hide'); // hide spinner bar
                    $('body').removeClass('page-on-load'); // remove page loading indicator
                });

                // handle errors
                $rootScope.$on('$stateNotFound', function() {
                    element.addClass('hide'); // hide spinner bar
                });

                // handle errors
                $rootScope.$on('$stateChangeError', function() {
                    element.addClass('hide'); // hide spinner bar
                });
            }
        };
    }
]);
/* Init global settings and run the app */
app.run(["$rootScope", "$state", "$location", "$anchorScroll", "$http", function($rootScope, $state, $location, $anchorScroll, $http) {
    $rootScope.$state = $state; // state to be accessed from view
    $http.get('data.json')
        .then(function(res){
            $rootScope.products = res.data;
        });
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        if($location.hash()) $anchorScroll();
    });
}]);