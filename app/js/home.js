angular
  .module("app.home", [])
  .controller(
    "homeCtrl",
    function ($scope, $location, $localStorage, $transitions, $state) {
      // $scope.$on("$routeChangeStart", function (event, toState, current) {
      //   console.log("hello");
      //   if (next.$$route.originalPath == "/" && $localStorage.loggedin == true) {
      //     event.preventDefault();
      //   }
      // });
      $transitions.onStart({}, function (transition) {
        if (transition.to().name == "login" && $localStorage.access_token) {
          return false;
        }
      });
      $scope.logout = function () {
        $localStorage.access_token = "";
        // $localStorage.loggedin = false;
        // $location.path("/");
        $state.go("login");
      };
    }
  );
