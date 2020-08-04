var app = angular.module('app',['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/sumurl/:a/:b', {
        templateUrl:'sumurl.html',
        controller:'sumurl',
        // template: '<strong>This is first message</strong>'
        // templateUrl:'msg1.html',
        // controller:'message1',
        // caseInsensitiveMatch:true
    })
    .when('/suminput', {
        templateUrl:'suminput.html',
        controller:'suminput',
    })
    .otherwise({
        template: '<strong>Wrong route Choosen</strong>'
    })
    // .when('/second-msg', {
    //     // template: '<strong>This is second message</strong>'
    //     templateUrl:'msg2.html',
    //     controller:'message2'
    // })
    // .when('/', {
    //     // template: '<strong>Click one of the Links</strong>'
    //     redirectTo: function(){
    //         alert("Not implemented yet");
    //         return '/first-msg'
    //     }
    // })
   
}]);

// app.controller('message1', ['$scope', function($scope){
//     $scope.a = 10;
//     $scope.b = 20;
// }])

// app.controller('message2', ['$scope', function($scope){
//     $scope.c = 30;
//     $scope.d = 40;
// }])

app.controller('sumurl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.a = $routeParams.a;
    $scope.b = $routeParams.b;
}])

app.controller('suminput', ['$scope', '$location', '$interpolate', function($scope, $location, $interpolate){
    $scope.a = 0;
    $scope.b = 0;

    $scope.doSum = function(){
        var url = $interpolate('/sumurl/{{a}}/{{b}}')($scope)
        // console.log(url)
        $location.path(url);
    }
}])