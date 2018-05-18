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
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          controller : "safeEduPageCtrl",
          abstract: true,
          title: '安全教育',
          sidebarMeta: {
            icon: 'ion-university',
            order: 400,
          },
        })
        .state('safeEdu.inner', {
          url: '/inner',
          templateUrl: 'app/pages/safeEdu/inner/inner.html',
          // controller: 'PageCtrl',
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
          templateUrl: 'app/pages/safeEdu/edu/edu.html',
          // controller: 'MapBubblePageCtrl',
          title: '教育培训',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
