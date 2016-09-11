'use strict'

angular.module("music_history")
    .controller('landingPageCtrl', [
        '$scope',
        '$http',
        'RootFactory',
        '$timeout',
        function($scope, $http, RootFactory, $timeout) {
            const musicInfo = this;

            $scope.apiRoot = null;
            $scope.filterArtists = "";
            $scope.filterAlbums = "";
            $scope.filterGenres = "";

            RootFactory.getApiRoot()
                .then((root) => {
                        $scope.apiRoot = root;
                        $timeout(); // A safe $scope.$apply()
                        return $scope.apiRoot
                    },
                    err => console.log("error", err)
                )
                .then((root) => {
                    $http.get(`${root.artists}`).then((res) => {
                        $scope.apiArtists = res.data;
                    })

                    $http.get(`${root.albums}`).then((res) => {
                        $scope.apiAlbums = res.data
                    })

                    $http.get(`${root.songs}`).then((res) => {
                        $scope.apiSongs = res.data;
                    })
                });
            // filter stuff

        }
    ]);
