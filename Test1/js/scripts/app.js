define(function () {

  var app = angular.module("webapp", ['ngRoute']);

  app.config(['$routeProvider', '$controllerProvider', '$provide', function ($routeProvider, $controllerProvider, $provide) {
      
      app.register = {
          controller: $controllerProvider.register,
          factory: $provide.factory
      };
      
      function resolveController(names) {
          return {
              load: ['$q', '$rootScope', function ($q, $rootScope) {
                  var defer = $q.defer();
                  require(names, function () {
                      defer.resolve();
                      $rootScope.$apply();
                  });
                  return defer.promise;
              }]
          }
      }
      
      $routeProvider
          .when("/view1", {
              templateUrl: "views/view1.html", controller: "View1Controller",
              resolve: resolveController(["View1Controller"])
          })
          .when("/view2", {
              templateUrl: "views/view2.html", controller: "View2Controller",
              resolve: resolveController(["View2Controller"])
          })
          .otherwise({redirectTo: '/view1'})
  }]);

  angular.element(document).ready(function () {
      angular.bootstrap(document, ['webapp']);
  });

  return app;
});