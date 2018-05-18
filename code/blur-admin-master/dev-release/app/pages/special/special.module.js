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
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: '特种设备管理',
          sidebarMeta: {
            icon: 'ion-hammer',
            order: 700,
          },
        }).state('special.monitor', {
          url: '/monitor',
          templateUrl: 'app/pages/special/monitor/special.html',
          // controller: 'GmapPageCtrl',
          title: '检测管理',
          sidebarMeta: {
            order: 2,
          },
         
        }).state('special.account', {
          url: '/account',
          templateUrl: 'app/pages/special/account/special.html',
          // controller: 'GmapPageCtrl',
          title: '台账管理',
          sidebarMeta: {
            order: 1,
          },
         
        });
  }

})();
