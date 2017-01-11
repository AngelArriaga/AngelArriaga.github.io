define(['app','dataServices'], function (app) {
  var injector = angular.injector(['dataServices','ng']);

  app.register.controller('View2Controller', ['$scope', function ($scope) {
    var Pictures = injector.get("Pictures");
    $scope.title = "Second View";
    
    /**
     * A simple:
     *  $scope.rows = Pictures.query();
     * does not works as the dataServices seems to be running outside of angular.
     */
    Pictures.query().then(function (data) {
      $scope.$apply(function () {
        $scope.rows = data;
      })
    });

  }])

}); 
