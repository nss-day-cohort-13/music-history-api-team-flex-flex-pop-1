angular.module('music_history')
    .controller('newSongCtrl', ['$scope', 'RootFactory', 'http', '$location',
        function($scope, RootFactory, $http, $location) {
            const newSong = this;
            RootFactory.getApiRoot().then(root => {
                return root;
            }).then(res => {
                RootFactory.httpGet(`${res.songs}`).then(songs => {
                    newTrack.Songs = songs.data;
                    return newTrack.Songs;
                }).then(res => {})

                newTrack.newSong = function() {
                    $http.post("http://localhost:8000/songs/"), {
                            name: newTrack.name,
                            time: newTrack.length,
                            album: newTrack.album,
                        }
                        .then(res => {
                            newTrack.name = '';
                            $location.path('/#/');
                        }, err => console.log('error', err))
                }
            })
        }
    ])
