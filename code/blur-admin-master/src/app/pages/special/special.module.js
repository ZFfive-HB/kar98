/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.special', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('special', {
          url: '/special',
          // templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: '特种设备管理',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        }).state('special.monitor', {
          url: '/monitor',
          // templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          // controller: 'GmapPageCtrl',
          title: '检测管理',
          sidebarMeta: {
            order: 0,
          },
         
        }).state('special.account', {
          url: '/account',
          // templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          // controller: 'GmapPageCtrl',
          title: '台账管理',
          sidebarMeta: {
            order: 1,
          },
         
        });
  }

})();
