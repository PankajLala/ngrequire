define(['require', 'angular', 'modules/feature1/module', 'modules/feature2/module'], function(require, angular){
  var module = angular.module('app',[
    'my.feature1',
    'my.feature2'
  ]);
  return module;
});
