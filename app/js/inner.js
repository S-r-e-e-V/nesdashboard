angular
  .module("app.inner", [])
  .controller("innerCtrl", function ($scope, $stateParams, LoginApiCall) {
    console.log($stateParams.id);

    $scope.loading = true;
    var promises = LoginApiCall.getData(
      "https://nse-listing-2.herokuapp.com/api/stocks/search/" + $stateParams.id
    );
    promises.then(function (response) {
      $scope.loading = false;
      if (response && response.data) {
        // response.data.forEach(function (item, index) {
        //   if (item.id == $stateParams.id) {
        $scope.company = response.data[0];
        $scope.company_name =
          response.data[0].NAME == ""
            ? response.data[0].SYMBOL
            : response.data[0].NAME;
        //   }
        // });
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
