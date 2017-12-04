angular.module('app', [])
  .controller('businessController', businessController);

function businessController($scope, $filter,$http, $log) {

  $scope.model = {
    city : null,
    categories : null,
    id : null,
    name : null,
   // attributes : null,
    stars : null,
    reviews : null,
  //  bikepark : null, 
    responseFromServer : null,
    responseFromServerId : null
  };

    this.consultarAction1 = function() {
      var url= "http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action=getBusiness&";

    //  var url2= "http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action=userRecommendation&";


      if($scope.model.id!=null && $scope.model.city!=null && $scope.model.categories!=null && $scope.model.name!=null && $scope.model.stars!=null && $scope.model.reviews!=null){
       url = url+"itemID="+$scope.model.id+"&city="+$scope.model.city+"&categories="+$scope.model.categories+"&name="+$scope.model.name+"&stars="+$scope.model.stars+"&reviews="+$scope.model.reviews;
      }
      //id, city, categories
      else if($scope.model.id!=null && $scope.model.city!=null && $scope.model.categories!=null && $scope.model.name==null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"itemID="+$scope.model.id+"&city="+$scope.model.city+"&categories="+$scope.model.categories;
      }
      //city, categories
      else if ($scope.model.id==null && $scope.model.city!=null && $scope.model.categories!=null && $scope.model.name==null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"city="+$scope.model.city+"&categories="+$scope.model.categories;
      }
      //id
      else if($scope.model.id!=null && $scope.model.city==null && $scope.model.categories==null && $scope.model.name==null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"itemID="+$scope.model.id;
      }
      //name
      else if($scope.model.id==null && $scope.model.city==null && $scope.model.categories==null && $scope.model.name!=null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"name="+$scope.model.name;        
      }
      //name, categories
      else if($scope.model.id==null && $scope.model.city==null && $scope.model.categories!=null && $scope.model.name!=null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"name="+$scope.model.name+"&categories="+$scope.model.categories;
      }
      // city
      else if($scope.model.id==null && $scope.model.city!=null && $scope.model.categories==null && $scope.model.name==null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"city="+$scope.model.city;
      }
      //stars
      else if($scope.model.id==null && $scope.model.city==null && $scope.model.categories==null && $scope.model.name==null && $scope.model.stars!=null && $scope.model.reviews==null){
        url = url+"stars="+$scope.model.stars;
      }
      //reviews
      else if($scope.model.id==null && $scope.model.city==null && $scope.model.categories==null && $scope.model.name==null && $scope.model.stars==null && $scope.model.reviews!=null){
        url = url+"reviews="+$scope.model.reviews;
      }
      //city, categories, name
      else if($scope.model.id==null && $scope.model.city!=null && $scope.model.categories!=null && $scope.model.name!=null && $scope.model.stars==null && $scope.model.reviews==null){
        url = url+"city="+$scope.model.city+"&categories="+$scope.model.categories+"&name="+$scope.model.name;
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
           $scope.model.id = null;
           $scope.model.city = null;
           $scope.model.categories = null;
           $scope.model.name = null;
           $scope.model.stars = null;
           $scope.model.reviews = null;
          }, function (response) {
           console.log(response);
           alert("Consulta inválida")
          } ); 

     
    }
}