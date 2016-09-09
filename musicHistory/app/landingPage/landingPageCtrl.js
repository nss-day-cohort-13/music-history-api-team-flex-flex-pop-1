'use strict'

angular.module("music_history")
  .controller('landingPageCtrl', [
      '$scope',
      '$http',
      'RootFactory',
      '$timeout',
  function($scope, $http, RootFactory, $timeout) {
    const musicInfo = this;
    // $scope.title = "Welcome to Music History's Landing Page"
    $scope.apiRoot = null;
    $scope.filterArtists = "";
    $scope.filterAlbums = "";
    $scope.filterGenres = "";



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
                $scope.apiArtists = res.data;
                console.log('artists', $scope.apiArtists);

            })

            $http.get(`${root.albums}`).then((res) => {
                $scope.apiAlbums = res.data
                console.log('Albums', $scope.apiAlbums);
            })

            $http.get(`${root.songs}`).then((res) => {
                $scope.apiSongs = res.data;
                console.log('Songs', $scope.apiSongs);
            })
        });
    // filter stuff

  }]);
