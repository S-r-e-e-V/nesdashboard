angular
  .module("app.inner", [])
  .controller("innerCtrl", function ($scope, $stateParams, $http) {
    console.log($stateParams.id);
    $scope.check123 = function () {
      console.log("hello");

      // $http({
      //   method: "GET",
      //   url:
      //     "http://api.marketstack.com/v1/eod?access_key=2138bb4f88bf06a11b603fd7a5853576",
      //   params: { access_key: "2138bb4f88bf06a11b603fd7a5853576" },
      // }).then(
      //   function (response) {
      //     console.log(response);
      //   },
      //   function (error) {
      //     console.log(error);
      //   }
      // );
    };
  });
