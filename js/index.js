angular.module('app', ['elasticsearch'])
  .service('client', function (esFactory) {
    return esFactory({
      host: 'http://localhost:8080/HybridRecommenderServlet/HybridRecommenderServlet?action',
    });
  })
  .controller('TabController', ['$scope', '$sce', 'client', function($scope,$sce, client) {
    $scope.tab = 1;
    $scope.showFrame = true;
    $scope.resultsDescription = [];

    $scope.setTab = function(newTab){

      if(newTab==1){
        $scope.showFrame = false;
      }else{
        $scope.showFrame = true;
      }

      if ($scope.tab != newTab){
        if(newTab == 7){
          $scope.setProject('index.html');
        }else{
          $scope.setProject('empty.html');
        }
      }

      $scope.tab = newTab;

      //console.log( $scope.showFrame  );
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };



    $scope.setProject = function (url) {
        console.log( url );
        //$scope.iframeUrl = url;
        $scope.resourceId = $sce.trustAsResourceUrl(url);
        //console.log( $scope.resourceId );
    };



}]);
