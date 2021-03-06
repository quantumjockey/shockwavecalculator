var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
    // then do not normalize the paths
    var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
    allTestFiles.push(normalizedTestModule);
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',

  paths: {
    angular: [
      '/base/bower_components/angular/angular'
    ],
    angularMocks: [
      '/base/bower_components/angular-mocks/angular-mocks'
    ],
    angularResource: [
      '/base/bower_components/angular-resource/angular-resource'
    ],
    angularRoute: [
      '/base/bower_components/angular-route/angular-route'
    ],
    paths: ['paths']
  },

  shim: {
    'angular': {
      exports: 'angular'
    },
    'angularMocks': {
      deps: ['angular'],
      exports: 'angularMocks'
    },
    'angularResource': {
      deps: ['angular'],
      exports: 'angularResource'
    },
    'angularRoute': {
      deps: ['angular'],
      exports: 'angularRoute'
    },
    'paths': {
      exports: 'paths'
    }
  },

  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});
