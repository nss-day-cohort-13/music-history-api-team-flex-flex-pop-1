angular.module('music_history')
    .controller('newAlbumCtrl', ['$scope', 'RootFactory', '$http', '$location',
        function($scope, RootFactory, $http, $location) {
            const newRecord = this;
            RootFactory.getApiRoot().then(root => {
                return root;
            }).then(ress => {
                $http.get(`${res.albums}`).then(albums => {
                    newRecord.albums = albums.data;
                    return newRecord.Albums;
                }).then(res => {})

                newRecord.newAlbum = function() {
                    $http.post("http://localhost:8000/albums/", {
                            name: newRecord.title,
                            genre: newRecord.genre,
                            year_released: newRecord.year_released,
                            artist: //dunno how to bind this to the artists list properly
                        })
                        .then(res => {
                            newRecord.title = '';
                            $location.path('/#/');
                        }, err => console.log('error', err))
                }
            })
        }
    ])
