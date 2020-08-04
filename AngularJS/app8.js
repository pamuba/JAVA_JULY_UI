var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/first-msg', {
        // template: '<strong>This is first message</strong>'
        templateUrl:'msg1.html',
        controller:'message1'
    })
    .when('/second-msg', {
        template: '<strong>This is second message</strong>'
    })
    .when('/', {
        template: '<strong>Default Route</strong>'
    })
}]);

app.controller('message1', ['$scope', function($scope){
    $scope.a = 10;
    $scope.b = 20;
}])