app.service("mainSrv", function($http, $q) {
// <---------	API data request from teleport.org	-----------> 
// <---- City Data Page API and functionality	---->
this.getArea = function(curSlug) {
    var deferred = $q.defer();
    return $http({
        method: 'GET',
        url:'https://api.teleport.org/api/urban_areas/slug:' + curSlug + '/'
    });
  };
// this.getCities = function() {
//     var deferred = $q.defer();
//     return $http({
//         method: 'GET',
//         url:'https://api.teleport.org/api/urban_areas'
//     });
//   };
});


