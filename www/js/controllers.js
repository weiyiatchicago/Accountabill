angular.module('starter.controllers', ['ionic'])

.controller('HomeCtrl', function($scope) {})

.controller('DetailCtrl', function($scope, Detail) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // $scope.Detail = Detail.all();
  // $scope.remove = function(Detail) {
  //   Detail.remove(home);
  // }
})


.controller('FavorateCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

