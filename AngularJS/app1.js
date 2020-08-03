var myApp = angular
                    .module("myModule", [])
                    .controller("myController", function($scope){
                        var country = {
                            name:"USA",
                            capital:"Washington DC",
                            flag:"flag.jpg"
                        }
                        $scope.country = country;
                    })