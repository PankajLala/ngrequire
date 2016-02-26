require.config({
  waitSeconds: 10000,
  paths: {
      'angular': '../node_modules/angular/angular',
      'angular-cookies': '../node_modules/angular-cookies/angular-cookies',
      'jquery': '../node_modules/jquery/dist/jquery',
  },

  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },

    'angular-cookies': {
      exports: 'angular-cookies',
      deps: ['angular']
    }
  }
});
