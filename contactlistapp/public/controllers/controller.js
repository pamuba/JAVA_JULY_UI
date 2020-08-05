function AppCtrl($scope, $http){
    console.log("Hello world from controller");

    $http.get('/contactlist').success(function(response){
        console.log("I got the requested data");
        $scope.contactlist = response;
    })

  
    

}