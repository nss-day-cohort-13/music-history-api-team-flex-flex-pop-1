angular.module('music_history')
  .controller('editArtistDetailCtrl',[
    '$scope',
    '$http',
    'RootFactory',
    '$timeout',
    '$routeParams',
    '$location',
    function ($scope, $http, RootFactory, $timeout, $routeParams, $location) {

      const editArtistDetail = this;
      editArtistDetail.title = 'Hello, My name is ArtistDetail Page';

      editArtistDetail.apiRoot = null;
      editArtistDetail.artists = null;

      RootFactory.getApiRoot()
        .then(root => {
            editArtistDetail.apiRoot = root;
            console.log('root', root);
            return $http.get(root.artists + $routeParams.artistId);
        },
            err => logError
        )
        .then(artistRes => {
            editArtistDetail.artist = artistRes.data;
            console.log('artist', editArtistDetail.artist);
            $timeout();
            // return $http.get($scope.animal.habitat);
        },
            err => logError
        )

      editArtistDetail.edit = () => {
        // console.log('editArtistDetail.apiRoot.artists', editArtistDetail.apiRoot.artists/);
        $http.patch(
          `${editArtistDetail.apiRoot.artists}${editArtistDetail.artist.id}/`,
          {
            'name': editArtistDetail.artist.name,
            'year_began': editArtistDetail.artist.year_began,
            'members': editArtistDetail.artist.members
          }).then(() => {
            $timeout();
            $location.path('/editArtist');
          })
      }
}]);
