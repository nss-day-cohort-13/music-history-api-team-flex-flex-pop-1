angular.module('music_history')
    .controller('newArtistCtrl', ['$scope', 'RootFactory', '$http', '$location', function($scope, RootFactory, $http, $location) {
        const newPerformer = this;
        RootFactory.getApiRoot().then(root => {
            return root;
        }).then(res => {
            // console.log('res', res);
            $http.get(`${res.artists}`).then(artists => {
                newPerformer.Artists = artists.data;
                // console.log('Artists.data', artists.data);
                return newPerformer.Artists;
            }).then(res => {})

            newPerformer.newArtist = function() {
                $http.post("http://localhost:8000/artists/", {
                        name: newPerformer.name,
                        year_began: newPerformer.yearBegan,
                        members: newPerformer.members
                    })
                    .then(res => {
                        // getArtistList()
                        newPerformer.name = '';
                        $location.path('/#/');

                    }, err => console.log(err))
            }
        })
    }])
