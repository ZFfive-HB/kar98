/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.safeFile', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('safeFile', {
          url: '/safeFile',
          // templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: '安全档案',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('safeFile.three', {
          url: '/three',
          // templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          // controller: 'GmapPageCtrl',
          title: '三同时管理',
          sidebarMeta: {
            order: 0,
          },
         
        })
        .state('orsafeFile.risk', {
          url: '/risk',
          // templateUrl: 'app/pages/maps/leaflet/leaflet.html',
          // controller: 'LeafletPageCtrl',
          title: '安全风险管理',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('safeFile.fix', {
          url: '/fix',
          // templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
          // controller: 'MapBubblePageCtrl',
          title: '检维修管理',
          sidebarMeta: {
            order: 200,
          },
        })
        .state('safeFile.appraise', {
          url: '/appraise',
          // templateUrl: 'app/pages/maps/map-lines/map-lines.html',
          // controller: 'MapLinesPageCtrl',
          title: '现状评价',
          sidebarMeta: {
            order: 300,
          },
        });
  }

})();
