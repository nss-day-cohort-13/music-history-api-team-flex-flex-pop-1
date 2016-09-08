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
     $scope.apiArtists = null;
     $scope.apiAlbums = null;
     $scope.apiSongs = null;


     RootFactory.getApiRoot()
       .then(
         root => {
           $scope.apiRoot = root;
           $timeout(); // A safe $scope.$apply()
           console.log('APIRoot', $scope.apiRoot);
           return $scope.apiRoot
         },
         err => console.log("error", err)
       ).then((root) => {
         $http.get(`${root.artists}`).then((res) => {
           $scope.Artists = res.data;
           console.log('artists', $scope.Artists);
         })

         $http.get(`${root.albums}`).then((res) => {
           $scope.Albums = res.data
           console.log('Albums', $scope.Albums);
         })

         $http.get(`${root.songs}`).then((res) => {
           $scope.Songs = res.data;
           console.log('Songs', $scope.Songs);
         })
       });
   }


 ]);
