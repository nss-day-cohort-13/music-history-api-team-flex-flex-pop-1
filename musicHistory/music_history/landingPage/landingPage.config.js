angular.module("music_history")
 .config(($routeProvider) => {
   $routeProvider
     .when("/", {
       controller: "LandingPageCtrl",
       templateUrl: "/music_history/landingPage/landingPage.html"
     })
 })
