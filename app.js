angular.module('lisaApp',['ngRoute','ngResource','simplePagination','cgBusy'])
.controller('MyCtrl', ['$scope', 'Pagination','$http',
function($scope, Pagination,$http) {
  $scope.pagination = Pagination.getNew(5);
    
     $scope.posts = [];
    
    
  $scope.myPromise =  $http.get("https://www.reddit.com/r/worldnews/new/.json").success(function(data){
       
       
        $scope.posts = [];
        
         angular.forEach(data.data.children, function(child){
             
             $scope.posts.push(child.data);
             
        
      });
        
        
        
        
        
         $scope.reload = function(){
             
             
           $scope.pagination = Pagination.getNew(5);
             
              $scope.posts = [];
             
              $scope.myPromise =    $http.get("https://www.reddit.com/r/worldnews/new/.json").success(function(data){
       
                                $scope.posts = [];

                             angular.forEach(data.data.children, function(child){

                                 $scope.posts.push(child.data);

                            
                          });
                      $scope.pagination.numPages = Math.ceil($scope.posts.length/$scope.pagination.perPage)
         });
         
           
             
                                                                            
         }
        
         
        
        
        $scope.pagination.numPages = Math.ceil($scope.posts.length/$scope.pagination.perPage);
    })
    
    
    
    
    
    
    
    
    
    
    
}]);