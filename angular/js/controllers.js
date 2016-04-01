var myApp = angular.module('hpControllers', []);

myApp.controller('IndexCtrl', ['$scope', '$http',function($scope, $http) {
    console.log("IndexCtrl");
    setTopNav('#nav_start');
    $scope.state = 'loading';

    $http.jsonp('http://intern.wellnessaufruegen.de/api/get-service-categories?callback=JSON_CALLBACK')
        .success(function(data, status, headers, config) {
            $scope.data = data;
            $scope.state = 'success';
        }).
        error(function(data, status, headers, config) {
            console.log(status);
            $scope.state = 'error';
        });

    setTimeout(function(){
        angular.element("#slider1").responsiveSlides({
            maxwidth: 1600,
            speed: 1000,
            fade: 500
        });
    });
}]);

myApp.controller('AboutCtrl', ['$scope', '$http',function() {
    setTopNav('#nav_about');
}]);

myApp.controller('ContactCtrl', ['$scope', '$http',function() {
    setTopNav('#nav_contact');
}]);

myApp.controller('GalleryCtrl', ['$scope', '$http',function() {
    setTopNav('#nav_gallery');
}]);

myApp.controller('PartnerCtrl', ['$scope', '$http',function() {
    setTopNav('#nav_partner');
}]);

myApp.controller('ServicesCtrl', ['$scope', '$http', '$route',function($scope, $http, $route) {
    setTopNav('#nav_services');
    $scope.state = 'loading';
    $http.jsonp('http://intern.wellnessaufruegen.de/api/get-service-categories?callback=JSON_CALLBACK')
        .success(function(data, status, headers, config) {
            $scope.data = data;
            $scope.state = 'success';
        }).
        error(function(data, status, headers, config) {
            console.log(status);
            $scope.state = 'error';
        });
}]);

myApp.controller('ServiceDetailCtrl', ['$scope', '$http', "$routeParams" ,function($scope, $http, $routeParams) {
    $scope.slug = $routeParams.slug;
    $scope.state = 'loading';
    var link = 'http://intern.wellnessaufruegen.de/api/get-service?callback=JSON_CALLBACK&slug=' + $scope.slug;
    $http.jsonp(link)
        .success(function(data, status, headers, config) {
            $scope.data = data;
            $scope.state = 'success';
    }).
        error(function(data, status, headers, config) {
            console.log(status);
            $scope.state = 'error';
        });
    setTopNav('#nav_services');
}]);


function setTopNav(selected) {
    angular.element('#top-navigation').find('li.active').removeClass('active');
    angular.element(selected).addClass('active');
}