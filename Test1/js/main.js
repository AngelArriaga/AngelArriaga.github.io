require.config({
  baseUrl: "js",
  
	// alias libraries paths
  paths: {
      'angular': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular.min',
      'angular-route': '//ajax.googleapis.com/ajax/libs/angularjs/1.2.1/angular-route.min',
      'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min',
      'View1Controller': 'scripts/controllers/ctrl1',
      'View2Controller': 'scripts/controllers/ctrl2',
      'dataServices': 'scripts/services/dataServices',
      'app': 'scripts/app'
  },

  shim: {
      'app': ['angular-route'],
      'angular-route': ['angular']
  },

  // kick start application
  deps: ['app']

});