angular
  .module("app.signup", [])
  .controller(
    "signupCtrl",
    function ($scope, $location, $localStorage, $state, apiCall) {
      function validation(input) {
        console.log(input);
        if (input == null || input.length == 0) {
          return "required field *";
        } else return "";
      }
      $scope.signup = async function () {
        $scope.errorUsername = validation($scope.username);
        $scope.errorPassword = validation($scope.password);
        if ($scope.errorUsername == "" && $scope.errorPassword == "") {
          // var Promise = apiCall.getData(
          //   "https://jsonplaceholder.typicode.com/todos/1"
          // );
          // Promise.then(function (response) {
          //   console.log(response);
          //   if (response && response.data) {
          //     console.log(response.data);
          //     $scope.errorPassword = response.data;
          //   } else if (response.status == 400) {
          //     $scope.errorPassword = "Please try another username";
          //   }
          // });

          var Promise = apiCall.postData(
            "https://nse-listing-2.herokuapp.com/api/auth/signup",
            {
              username: $scope.username,
              password: $scope.password,
            }
          );
          Promise.then(function (response) {
            if (response && response.data) {
              var LoginPromise = apiCall.postData(
                "https://nse-listing-2.herokuapp.com/api/auth/login",
                {
                  username: $scope.username,
                  password: $scope.password,
                }
              );
              LoginPromise.then(function (responseLogin) {
                if (responseLogin && responseLogin.data) {
                  // $localStorage.loggedin = true;
                  $localStorage.access_token =
                    responseLogin.data.data.access_token;
                  $state.go("home.main");
                } else {
                  $scope.errorPassword = "Please try another username";
                }
              });

              // $localStorage.loggedin = true;
            } else if (response.status == 400) {
              $scope.errorPassword = "Please try another username";
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
