angular.module('music_history')
.controller('editArtistCtrl', ['$scope', 'RootFactory', '$http', '$location', "$timeout", function ($scope, RootFactory, $http, $location, $timeout) {
  const editArtist = this;
  // editArtist.artistName = '';
  // editArtist.artistYearBegan = '';
  // editArtist.artistMembers = '';

  editArtist.artistObject = {}

  RootFactory.getApiRoot()
  .then(root => {
    // console.log('root', root);
    $http.get(`${root.artists}`)
    .then(res => {
      editArtist.artistsData = res.data;
      // console.log('artistData', editArtist.artistsData);
    })
  })

  editArtist.editArtistInfo = (artist) => {
    console.log('artist', artist);
    editArtist.artistToBeEdited = artist;
    // editArtist.artistObject.artistName = artist.name;
    // console.log(editArtist.artistObject);
    // editArtist.artistObject.artistYearBegan = artist.year_began;
    // console.log(editArtist.artistObject);
    // editArtist.artistObject.artistMembers = artist.members;
    // console.log(editArtist.artistObject);
    // $timeout();
    $location.path('/editArtistInfo');
    // return editArtist.artistObject;
    // console.log('artist', artist);
    // editArtist.artistName = artist.name;
    // console.log('editArtist.artistName', editArtist.artistName);
    // editArtist.artistYearBegan = artist.year_began;
    // editArtist.artistMembers = artist.members;
    // console.log('artist.name', artist.name);
    // console.log('artist.year_began', artist.year_began);
    // console.log('artist.members', artist.members);
  }

  editArtist.deleteArtistInfo = (artist) => {
    console.log('artistId', artistId);
  }

  editArtist.changePath = (path) => {
    $location.path('/')
  }

}]);
