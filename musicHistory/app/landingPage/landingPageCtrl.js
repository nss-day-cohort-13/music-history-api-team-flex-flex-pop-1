'use strict'

angular.module("music_history")
  .controller('landingPageCtrl', [
      '$scope',
      '$http',
      'RootFactory',
      '$timeout',
      '$q',
  function($scope, $http, RootFactory, $timeout, $q) {
    const musicInfo = this;
    // $scope.title = "Welcome to Music History's Landing Page"
    $scope.apiRoot = null;

    $scope.filteredSongs = "";
    $scope.allSongs = "";

    $scope.filterArtists = "";
    $scope.filterAlbums = "";
    $scope.filterGenres = "";

    $scope.songInfoObject = [];



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
          const artistsGet = $http.get(`${root.artists}`).then((res) => {
                                  $scope.apiArtists = res.data;
                                  // console.log('artists', $scope.apiArtists);
                                  return $scope.apiArtists;
                                })

          const albumsGet = $http.get(`${root.albums}`).then((res) => {
                                  $scope.apiAlbums = res.data
                                  // console.log('Albums', $scope.apiAlbums)
                                  return $scope.apiAlbums;
                                })

          const songsGet = $http.get(`${root.songs}`).then((res) => {
                                  $scope.allSongs = res.data;
                                  $scope.filteredSongs = res.data;
                                  // console.log('Songs', $scope.apiSongs);
                                  return $scope.allSongs;
                                })


          // following code creates an array hold all artists, albums, songs data as the 'res'
          $q.all([artistsGet, albumsGet, songsGet]).then(res => {
            // console.log('allData', res);
            const [artists, albums, songs] = res;

            songs.forEach(song => {
              const album = albums.find(albumInfo => albumInfo.url === song.album)
              const artist = artists.find(artistInfo => artistInfo.url === album.artist)



              $scope.songInfoObject.push({
                songTitle: song.title,
                songLength: song.length.slice(-4),
                albumTitle: album.title,
                albumGenre: album.genre,
                artistName: artist.name
              })
            })

            $scope.filteredSongs = $scope.songInfoObject;

            console.log('SongInfoObject', $scope.songInfoObject);
          })
        });
    // filter stuff

    $scope.filterByArtist = (selectedArtist) => {
      $scope.filteredSongs = $scope.songInfoObject.filter(song => {
        for (var i = 0; i < $scope.apiAlbums.length; i++){
          if(selectedArtist === null){
            return $scope.allSongs;
          } else {
            if (song.artistName == selectedArtist.name){
              return song;
            }
          }
        }
      })
    }

    $scope.filterByAlbum = (selectedAlbum) => {
      // console.log('selectedAlbum', selectedAlbum);
      // Loop over allSongs, find where album matches selectedAlbum
      $scope.filteredSongs = $scope.songInfoObject.filter(song => {
        // console.log('song', song);
        if(selectedAlbum === null){
          return $scope.allSongs;
        } else{
          if (song.albumTitle == selectedAlbum.title){
            return song;
          }
        }
      });
    }

    $scope.filterByGenre = (selectedAlbum) => {
      // console.log('SG', selectedGenre);
      $scope.filteredSongs = $scope.songInfoObject.filter(song => {
        if (selectedAlbum === null){
          return $scope.allSongs;
        } else {
          if (song.albumGenre == selectedAlbum.genre){
            return song;
          }
        }
      })
    }

  }]);
