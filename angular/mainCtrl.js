app.controller("mainCtrl", function($scope, mainSrv) {
  // <---- test set up	---->
  function jump(h) {
    // failed attempt to focus on update city portion
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
  }

  // ----------- get major tech hub functions---------->
  $scope.getNewYork = function() {
    $scope.changeCity("new-york");
    curSlug = "new-york";
  };

  $scope.getSeattle = function() {
    $scope.changeCity("seattle");
    curSlug = "seattle";
  };
  $scope.getAustin = function() {
    $scope.changeCity("austin");
    curSlug = "austin";
  };

  var curSlug = "san-francisco-bay-area"; // ****** will come in caps, will have to .ToLowerCase it
  // var curCity = "San Francisco Bay Area";
  // var curcityUaID = "9q8yy";
  //  /test set up
  // <---- Tool used to remove html tags from city summary imported through teleport api	---->
  function stripHtml(str) {
    if (str === null || str === "") return false;
    else str = str.toString();
    return str.replace(/<[^>]*>/g, "");
  }
  // <---- Scope to Service functionality	---->
  $scope.changeCity = function(city) {
    mainSrv.getArea(city).then(function(response) {
      //http request to get data about a city
      //console.log(response);
      $scope.curArea = response.data; //curArea is the area we're working with
      $scope.curArea.name = response.data.name;
      $scope.curArea.overview = response.data.name;
    });
    mainSrv.getArea(city + "/scores").then(function(response) {
      //http request to get scores and summary about a city
      //console.log(response);
      var overview = stripHtml(response.data.summary); //removes html tags from overview response
      $scope.curArea.overview = overview; // summary to view
      $scope.scores = response.data.categories; // scores to city quality bars
      var widthScore = "10" * response.data.categories;
    });
    mainSrv.getArea(city + "/images").then(function(response) {
      //http request to get image of a city

      var headerImage = response.data.photos[0].image.web;
      $scope.curArea.image = headerImage;
    });
    mainSrv.getArea(city + "/salaries").then(function(response) {
      //http request to get image of a city
      $scope.jobs = response.data.salaries[50].salary_percentiles; //this is zeroed down to just WebDevs -but plenty of other jobs area available
    });
    mainSrv.getArea(city + "/details").then(function(response) {
      //http request to get details of a city
      $scope.housing = response.data.categories[8].data[0]; //housing cost via api
      $scope.cost = response.data.categories[3].data; // cost of living
    });
    // mainSrv.getCities().then(function(response) {
    //   var cities = response.data;
    //   console.log(response.data._links.ua:item);
    // });
  };

  $scope.changeCity(curSlug);
  // teleport autofill----------
  var $results = document.querySelector(".results");
  // var appendToResult = $results.insertAdjacentHTML.bind($results, "afterend");
  TeleportAutocomplete.init(".my-input").on("change", function(value) {
    // appendToResult("<pre>" + JSON.stringify(value) + "</pre>");
    console.log(JSON.stringify(value, null, 2));
    var preCurSlug = JSON.stringify(value, null, 2);
    $scope.changeCity(value.uaSlug);
    console.log(value.uaSlug);
  });
  var objectHold;
});
