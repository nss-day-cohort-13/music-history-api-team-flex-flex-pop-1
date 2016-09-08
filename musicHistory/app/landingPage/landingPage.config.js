angular.module("music_history")
 .config(($routeProvider) => {
   $routeProvider
     .when("/", {
       controller: "landingPageCtrl",
       templateUrl: "/app/landingPage/landingPage.html"
     })
 })
