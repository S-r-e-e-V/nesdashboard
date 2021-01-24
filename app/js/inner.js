angular
  .module("app.inner", [])
  .controller("innerCtrl", function ($scope, $stateParams, LoginApiCall) {
    console.log($stateParams.id);

    $scope.loading = true;
    var promises = LoginApiCall.getData(
      "https://nse-listing.herokuapp.com/stocks/dropdown"
    );
    promises.then(function (response) {
      $scope.loading = false;
      if (response && response.data) {
        response.data.data.forEach(function (item, index) {
          if (item.id == $stateParams.id) {
            $scope.company = item;
          }
        });
        // for (var item in response.data.data) {
        //   console.log(item);
        //   if (item.id == $stateParams.id) {
        //     console.log(item);
        //   }
        // }
      } else if (response.status == 400) {
        alert("Something went wrong");
      }
    });
  });
