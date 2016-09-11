angular.module('music_history')
    .controller('newArtistCtrl', ['$scope', 'RootFactory', '$http', '$location', function($scope, RootFactory, $http, $location) {
        const newPerformer = this;

        RootFactory.getApiRoot().then(root => {
          console.log('root', root)
          newPerformer.apiRoot = root;
        })

        newPerformer.newArtist = function() {
          $http.post(`${newPerformer.apiRoot.artists}`, {
              'name': newPerformer.name,
              'year_began': newPerformer.yearBegan,
              'members': newPerformer.members
          })
          .then(res => {
              $location.path('/');
          },
            err => console.log(err)
          )
        }
    }])
