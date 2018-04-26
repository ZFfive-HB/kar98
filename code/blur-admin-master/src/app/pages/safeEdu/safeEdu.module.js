/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.safeEdu', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('safeEdu', {
          url: '/safeEdu',
          // templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: '安全教育',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('safeEdu.inner', {
          url: '/inner',
          // templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          // controller: 'GmapPageCtrl',
          title: '内部培训',
          sidebarMeta: {
            order: 0,
          },
         
        })
        .state('safeEdu.outter', {
          url: '/outter',
          // templateUrl: 'app/pages/maps/leaflet/leaflet.html',
          // controller: 'LeafletPageCtrl',
          title: '外委培训',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('safeEdu.edu', {
          url: '/edu',
          // templateUrl: 'app/pages/maps/map-bubbles/map-bubbles.html',
          // controller: 'MapBubblePageCtrl',
          title: '教育培训',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
