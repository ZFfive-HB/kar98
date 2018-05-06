/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.org', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('org', {
          url: '/org',
          // templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: '组织机构',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('org.org', {
          url: '/org',
          templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          // controller: 'GmapPageCtrl',
          title: '安委会',
          sidebarMeta: {
            order: 0,
          },
        })
        .state('org.AJHB', {
          url: '/AJHB',
          // templateUrl: 'app/pages/maps/leaflet/leaflet.html',
          // controller: 'LeafletPageCtrl',
          title: '安健环部',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('org.AJHB.reg', {
          url: '/AJHB/reg',
          // templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
          // controller: 'MapBubblePageCtrl',
          title: '管理制度',
          sidebarMeta: {
            order: 200,
          },
        })
        .state('org.AJHB.person', {
          url: '/AJHB/person',
          // templateUrl: 'app/pages/maps/map-lines/map-lines.html',
          // controller: 'MapLinesPageCtrl',
          title: '人员情况',
          sidebarMeta: {
            order: 300,
          },
        });
  }

})();
