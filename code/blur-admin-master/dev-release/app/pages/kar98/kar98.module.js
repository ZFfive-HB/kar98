/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.kar98', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('kar98', {
          url: '/kar98',
          templateUrl : 'app/pages/kar98/kar98.html',
          // abstract: true,
          // controller: 'LawsPageCtrl',
          title: '989898',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        });
        // 默认显示
    // $urlRouterProvider.when('/emergency','/emergency/sys');
  }

})();
