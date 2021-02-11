angular
  .module("app.login", [])
  .controller(
    "loginCtrl",
    function ($scope, $location, $localStorage, $state, apiCall) {
      if ($localStorage.access_token) {
        $state.go("home.main");
      }

      function validation(input) {
        console.log(input);
        if (input == null || input.length == 0) {
          return "required field *";
        } else return "";
      }
      $scope.login = function () {
        $scope.errorUsername = validation($scope.username);
        $scope.errorPassword = validation($scope.password);

        if ($scope.errorUsername == "" && $scope.errorPassword == "") {
          var Promise = apiCall.postData(
            "https://nse-listing-2.herokuapp.com/api/auth/login",
            {
              username: $scope.username,
              password: $scope.password,
            }
          );
          Promise.then(function (response) {
            if (response && response.data) {
              console.log(response.data.data.access_token);
              // $localStorage.loggedin = true;
              $localStorage.access_token = response.data.data.access_token;
              $state.go("home.main");
            } else if (response.status == 400) {
              $scope.errorPassword = "Invalid username or password";
            }
          });

          // $localStorage.loggedin = false;
          // console.log("submit");
          // if ($scope.username == "admin" && $scope.password == "admin") {
          //   $localStorage.loggedin = true;
          //   console.log("success");
          //   // $location.path("/home");
          //   $state.go("home.main");
          // } else {
          //   $scope.errorPassword = "Enter valid username and password";
          // }
        }
      };
    }
  );
