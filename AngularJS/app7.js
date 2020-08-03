var app = angular.module("myModule", []);
app.controller("myController", ["$scope",function($scope){
    $scope.msg = "This is message from Scope";
}]);
app.directive('myInfoMsg', function(){
    return {
        templateUrl:"my-info-msg.html"
    }
})