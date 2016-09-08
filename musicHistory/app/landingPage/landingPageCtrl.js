'use strict'

angular.module("music_history")
 .controller('landingPageCtrl', [
   '$scope',
   '$http',
   'RootFactory',
   '$timeout',
   function ($scope, $http, RootFactory, $timeout) {
     $scope.title = "Welcome to Music History's Landing Page"
     $scope.apiRoot = null;

     RootFactory.getApiRoot()
       .then(
         res => {
           $scope.apiRoot = res;
           $timeout(); // A safe $scope.$apply()
         },
         err => console.log("error", err)
       );
   }
 ]);
