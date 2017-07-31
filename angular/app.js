var app = angular
  .module("no-server", ["ui.router"])
  .config(function($stateProvider, $urlRouterProvider) {
    // $stateProvider
    //   .state("home", {
    //     url: "/",
    //     templateUrl: "/angular/home/home.html",
    //     controller: "homeCtrl"
    //   })
    //   .state("city", {
    //     url: "/city",
    //     templateUrl: "/angular/city/city.html",
    //     controller: "cityCtrl"
    //   })
    //       .state("hotSpots", {
    //         url: "/hotspots",
    //         templateUrl: "/angular/hotSpots/hotspots.html",
    //         controller: "hotSpotsCtrl"
    //       });
    //     $urlRouterProvider.otherwise("/");
  });
