var appp = angular
            .module("myModule", [])
            .controller("myController", function($scope, stringService){
                $scope.transformString = function(input){
                    $scope.output = stringService.proceeString(input);
                }
            })