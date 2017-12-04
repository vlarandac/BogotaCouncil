angular.module('app', [])
  .controller('userController', userController);

function userController($scope, $filter,$http, $log) {

  $scope.model = {
    name : null,
    averagestars : null,
    reviewcount : null,
    recommendations : null, 
    user_id : null,
    responseFromServer : null,
    responseFromServerUserId : null,
    responseFromServerReco : null,
    city : null,
    day : null,
    hour : null
  };

    this.consultarAction = function() {
      var url= "http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action=getUsers&";

      if($scope.model.name!=null && $scope.model.averagestars!=null && $scope.model.reviewcount!=null){
       url = url+"name="+$scope.model.name+"&averagestars="+$scope.model.averagestars+"&reviewcount="+$scope.model.reviewcount;
      }
      //name
      else if($scope.model.name!=null && $scope.model.averagestars==null && $scope.model.reviewcount==null){
        url = url+"name="+$scope.model.name;        
      }
      //averagestars
      else if($scope.model.name==null && $scope.model.averagestars!=null && $scope.model.reviewcount==null){
        url = url+"averagestars="+$scope.model.averagestars;
      }
      //reviewcount
      else if($scope.model.name==null && $scope.model.averagestars==null && $scope.model.reviewcount!=null){
        url = url+"reviewcount="+$scope.model.reviewcount;
      }
      else{
        alert("Debe agregar un dato");
       // url = url+"";
      }

      $http({
          method: 'GET',
          url: url,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache'
            }
      }).then(function(response) {
          $scope.model.responseFromServer = response.data;
           console.log($scope.model.responseFromServer );
           $scope.model.name = null;
           $scope.model.averagestars = null;
           $scope.model.reviewcount = null;
          }, function (response) {
           console.log(response);
           alert("Consulta inválida")
          } ); 

        }     

      this.consultarActionUserID = function(user_id) {
      var url2 = "http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action=userRecommendation&"

      if($scope.model.user_id==null  ){
       url = url2+"userID="+(user_id==null?"":user_id);
      }
      else{
        alert("Error");
       // url = url+"";
      }

      $http({
          method: 'GET',
          url: url,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache'
            }
      }).then(function(response) {
          $scope.model.responseFromServerUserId = response.data;
           console.log($scope.model.responseFromServerUserId );
          }, function (response) {
           console.log(response);
           alert("Consulta inválida")
          $log.debug("looking for url:", url);
          } ); 
    }
}


    this.consultarActionReco = function() {
      var url2= "http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action=userRecommendation&";
              //  http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action=userRecommendation&userID=1&recommendations=20&day=Monday&hour=9
      if($scope.model.user_id!=null && $scope.model.day!=null && $scope.model.hour!=null && $scope.model.city!=null){
       url = url2+"userID"+user_id+"day="+$scope.model.day+"&hour="+$scope.model.hour+"&city="+$scope.model.city;
      }
      //day 
      else if($scope.model.user_id!=null &&$scope.model.day!=null && $scope.model.hour==null && $scope.model.city==null){
      url = url2+"userID"+user_id+"&day="+$scope.model.day; 
      }
      //hour 
      else if($scope.model.user_id!=null &&$scope.model.day==null && $scope.model.hour!=null && $scope.model.city==null){
      url = url2+"userID"+user_id+"&hour="+$scope.model.hour; 
      }
      //city
      else if($scope.model.user_id!=null &&$scope.model.day==null && $scope.model.hour==null && $scope.model.city!=null){
      url = url2+"city="+$scope.model.city; 
      }
      else{
        alert("Debe agregar un dato");
       // url = url+"";
      }

      $http({
          method: 'GET',
          url: url3,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-cache'
            }
      }).then(function(response) {
          $scope.model.responseFromServerReco = response.data;
           console.log($scope.model.responseFromServerReco );
           $scope.model.day = null;
           $scope.model.hour = null;
           $scope.model.city = null;
          }, function (response) {
           console.log(response);
           alert("Consulta inválida")
          } ); 

        
}
