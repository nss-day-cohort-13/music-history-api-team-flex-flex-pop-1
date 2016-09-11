angular.module('music_history')
    .controller('newAlbumCtrl', ['$scope', 'RootFactory', '$http', '$location', '$timeout',
        function($scope, RootFactory, $http, $location, $timeout) {
            const newRecord = this;

            RootFactory.getApiRoot().then(root => {
              newRecord.apiRoot = root;
              $http.get(`${root.albums}`)
              .then(albums => {
                newRecord.albums = albums.data;
              })

/************ THIS IS FOR GETTING ALL ARTISTS TO DISPLAY IN THE SELECT DROPDOWN *******************************/
/**************************************************************************************************************/
/**********/ $http.get(`${root.artists}`) /********************************************************************/
/**********/ .then(artists => { /******************************************************************************/
/***********/ newRecord.artists = artists.data;/***************************************************************/
/**********/ }) /**********************************************************************************************/
/**************************************************************************************************************/
/**************************************************************************************************************/
           })

            newRecord.newAlbum = () => {
              console.log('newRecord.albumArtist', newRecord.albumArtist);
              $http.post(`${newRecord.apiRoot.albums}`, {
                'title': newRecord.albumTitle,
                'genre': newRecord.genre,
                'year_released': newRecord.yearReleased,
                'artist': newRecord.albumArtist.url /*
                                                    This code refers to what is selected in the SELECT ELEMENT,
                                                    which is being referenced by ng-model(you already know this),
                                                    You need the url because that is what is set in the api.
                                                    */ 
              })
              .then(res => {
                $location.path('/');
              }, err => console.log('error', err))
            }
        }])
