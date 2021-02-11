angular
  .module("app.main", [])
  .controller("mainCtrl", function ($scope, LoginApiCall) {
    $scope.loading = true;
    var promises = LoginApiCall.getData(
      "https://nse-listing-2.herokuapp.com/api/stocks/"
    );
    promises.then(function (response) {
      $scope.loading = false;
      if (response && response.data) {
        $scope.companyDetails = response.data;
      } else if (response.status == 400) {
        alert("Something went wrong");
      }
    });
    $scope.search = function (item) {
      if ($scope.searchText == undefined) {
        return true;
      } else {
        if (
          item.NAME.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=
            -1 ||
          item.SYMBOL.toLowerCase().indexOf($scope.searchText.toLowerCase()) !=
            -1
        ) {
          return true;
        }
      }
      return false;
    };
  });
