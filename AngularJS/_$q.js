var app = angular.module("app", []);
app.controller("AppCtrl", function ($scope, $q) {
  function add(x, y) {

    var q = $q.defer();

    setTimeout(function () {
     var result = x+y;
     if(result >=0){ 
        q.resolve(x + y);
     }else{
         q.reject('negative value '+ result)
     }
    }, 100);

    return q.promise;
  }

  var starTime = Date.now();

 //promise chaining
  add(5, 2)
    .then(function(result){
        return add(result, -10); //returns a promise
    })
    .then(function(result){
        return add(result, 1);
    })
    // .then(function(result){
    //     return Array(result).join('*');
    // })
    .then(function (result) {
    $scope.result = result;
    
  })
  .catch(function(err){
      $scope.failure = err;
  })
  .finally(function(){
    $scope.elapsedTime = Date.now() - starTime;
  });

  //   add(5, 2, function (result) {
  //     add(result, 3, function (result) {
  //       add(result, 1, function (result) {
  //         $scope.result = result;
  //         $scope.elapsedTime = Date.now() - starTime;
  //       }, function(err){ /** some error */});
  //     }, function(err){ /** some error */});
  //   }, function(err){ /** some error */});
});
