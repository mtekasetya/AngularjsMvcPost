var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/Home/', {
            templateUrl: '/Templates/customer.html',
            controller: 'customerCtrl'
        })
        .otherwise({
            redirectTo: '/Home/'
        });

    $locationProvider.html5Mode(true);

});

myApp.controller('customerCtrl', function ($scope, customerSvc) {

    $scope.save1 = function (customer) {
        customerSvc.save1(customer);
    };

    $scope.save2 = function (customer) {
        customerSvc.save2(customer);
    };

});

myApp.factory('customerSvc', function ($http) {
    return {
        save1: function(customer) {
            $http.post('/Home/Save1', customer); // CustomerVm
        },
        save2: function (customer) {
            $http.post('/Home/Save2', customer); // FormCollection
        }
    };
});