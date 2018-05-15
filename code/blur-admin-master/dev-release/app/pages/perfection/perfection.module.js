/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.perfection', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('perfection', {
          url: '/perfection',
          // templateUrl: 'app/pages/maps/maps.html',
          abstract: true,
          title: '持续改进',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 500,
          },
        })
        .state('perfection.contribution', {
          url: '/contribution',
          // templateUrl: 'app/pages/maps/google-maps/google-maps.html',
          // controller: 'GmapPageCtrl',
          title: '安委会',
          sidebarMeta: {
            order: 0,
          },
         
        })
        .state('perfection.perfection', {
          url: '/perfection',
          // templateUrl: 'app/pages/maps/leaflet/leaflet.html',
          // controller: 'LeafletPageCtrl',
          title: '持续改进',
          sidebarMeta: {
            order: 100,
          },
        });
  }

})();
