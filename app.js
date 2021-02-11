var app = angular.module("app", [
  "ui.router",
  "ngStorage",
  "app.login",
  "app.signup",
  "app.home",
  "app.main",
  "app.inner",
  // "oitozero.ngSweetAlert",
]);

app.config(function (
  $stateProvider,
  $locationProvider,
  $urlMatcherFactoryProvider,
  $urlRouterProvider
) {
  // $locationProvider.html5Mode({ enabled: true, requireBase: false });
  $urlMatcherFactoryProvider.caseInsensitive(true);
  $urlRouterProvider.otherwise("/");
  $stateProvider
    .state("login", {
      url: "/",
      templateUrl: "app/pages/login.html",
      controller: "loginCtrl",
    })
    .state("signup", {
      url: "/signup",
      templateUrl: "app/pages/signup.html",
      controller: "signupCtrl",
    })
    .state("home", {
      // url: "/",
      templateUrl: "app/pages/home.html",
      controller: "homeCtrl",
      resolve: {
        check: function ($location, $state, $localStorage) {
          if (!$localStorage.access_token) {
            // $location.path("/");
            $state.go("login");
          }
        },
      },
    })
    .state("home.main", {
      url: "/home",
      templateUrl: "app/pages/main.html",
      controller: "mainCtrl",
    })
    .state("home.inner", {
      url: "/:id",
      templateUrl: "app/pages/inner.html",
      controller: "innerCtrl",
    });
  // .otherwise({
  //   redirectTo: "/",
  // });
  $locationProvider.html5Mode({ enabled: true, requireBase: false });
  // $locationProvider.hashPrefix("");
});
