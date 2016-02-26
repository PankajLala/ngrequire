require(['angular', 'app', 'angular-cookies'], function(angular){
  'use strict';

  var $injector = angular.injector(['ngCookies']);
  $injector.invoke(['$cookieStore','$window', function($cookieStore, $window){
    var session = $cookieStore.get('my-session');
    if(!session)
      //$window.location.reload();

    document.cookie = "my-session=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";

    angular.module('app')
        .constant('session', session)
        .constant('featureFlags', window._features).run(function(){

        });
    angular.bootstrap(document, ['app']);
  }]);
});
