/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.security', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('security', {
          url: '/security',
          // templateUrl: 'app/pages/maps/maps.html',
          // abstract: true,
          title: '安全检查',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        });
  }

})();
