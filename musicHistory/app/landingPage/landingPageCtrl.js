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

    $scope.filteredSongs = "";
    $scope.allSongs = "";

    $scope.filterArtists = "";
    $scope.filterAlbums = "";
    $scope.filterGenres = "";



    RootFactory.getApiRoot()
        .then(
            root => {
                $scope.apiRoot = root;
                $timeout(); // A safe $scope.$apply()
                // console.log('APIRoot', $scope.apiRoot);
                return $scope.apiRoot
            },
            err => console.log("error", err)
        ).then((root) => {
            $http.get(`${root.artists}`).then((res) => {
                $scope.apiArtists = res.data;
                // console.log('artists', $scope.apiArtists);

            })

            $http.get(`${root.albums}`).then((res) => {
                $scope.apiAlbums = res.data
                // console.log('Albums', $scope.apiAlbums);
            })

            $http.get(`${root.songs}`).then((res) => {
                $scope.allSongs = res.data;
                $scope.filteredSongs = res.data;
                // console.log('Songs', $scope.apiSongs);
            })
        });
    // filter stuff

    $scope.filterByArtist = (selectedArtist) => {
      $scope.filteredSongs = $scope.allSongs.filter(song => {
        for (var i = 0; i < $scope.apiAlbums.length; i++){
          if (song.album == $scope.apiAlbums[i].url && $scope.apiAlbums[i].artist == selectedArtist.url){
            return song;
          }
        }
      })
    }

    $scope.filterByAlbum = (selectedAlbum) => {
      // Loop over allSongs, find where album matches selectedAlbum
      $scope.filteredSongs = $scope.allSongs.filter(song => {
        if (song.album == selectedAlbum.url){
          return song;
        }
      });
    }

    $scope.filterByGenre = (selectedGenre) => {
      console.log('SG', selectedGenre);
      $scope.filteredSongs = $scope.allSongs.filter(song => {
        for (var i = 0; i < $scope.apiAlbums.length; i++){
          if (song.album == $scope.apiAlbums[i].url && selectedGenre.genre == $scope.apiAlbums[i].genre){
            return song
          }
        }
      })
    }

  }]);
