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
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: '持续改进',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 1400,
          },
        })
        .state('perfection.contribution', {
          url: '/contribution',
          templateUrl: 'app/pages/perfection/contribution/contribution.html',
          controller: 'perfectionPageCtrl',
          title: '绩效评定',
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
