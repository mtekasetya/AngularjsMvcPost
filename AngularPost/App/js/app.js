var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider, $locationProvider) {

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

    $scope.customer = {
        firstName: 'John',
        lastName: 'Doe'
    };

    var antiForgeryToken = angular.element(document.querySelector('[name=__RequestVerificationToken]'));

    $scope.save1 = function (customer) {
        customerSvc.save1(customer, antiForgeryToken[0].value);
    };

    $scope.save2 = function (customer) {
        customerSvc.save2(customer, antiForgeryToken[0].value);
    };

});

myApp.factory('customerSvc', function ($http) {
    return {
        save1: function (customer, antiForgeryToken) {

            // CustomerVm
            $http({
                method: 'POST',
                url: '/Home/Save1',
                data: customer
            });
        },
        save2: function (customer, antiForgeryToken) {

            var data = JSON.stringify(customer);

            // FormCollection
            $http({
                method: 'POST',
                url: '/Home/Save2',
                //dataType: 'json',
                contentType: 'application/x-www-form-urlencoded; charset-UTF-8',
                //contentType: 'application/json; charset-UTF-8',
                data: data
            });
        }
    };
});