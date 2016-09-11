angular.module("music_history")
    .config(($routeProvider) => {
        $routeProvider
            .when("/", {
                controller: "landingPageCtrl",
                //  controllerAs: "landing",
                templateUrl: "/app/landingPage/landingPage.html"
            })
            .when("/addNewArtist", {
                controller: 'newArtistCtrl',
                controllerAs: 'newPerformer',
                templateUrl: '/app/newArtist/newArtist.html'
            })
             .when("/addNewAlbum", {
               controller: 'newAlbumCtrl',
               controllerAs: 'newRecord',
               templateUrl: '/app/newAlbum/newAlbum.html'
             })
             .when("/addNewSong", {
               controller: 'newSongCtrl',
               controller: 'newSong',
               templateUrl: '/app/newSong/newSong.html'
             })
            //  .when("/editArtist", {
            //    controller: 'editArtistCtrl',
            //    templateUrl: '/app/editArtist/editArtist.html'
            //  })
            //  .when("/editAlbum", {
            //    controller: 'editAlbumCtrl',
            //    templateUrl: '/app/editAlbum/editAlbum.html'
            //  })
            //  .when("/editSong", {
            //    controller: 'editSongCtrl',
            //    templateUrl: '/app/editSong/editSong.html'
            //  })
    })
    .config(function($httpProvider) {
        $httpProvider.defaults.xsrfCookieName = 'csrftoken';
        $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
    });
