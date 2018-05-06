/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.fireControl', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('fireControl', {
          url: '/fireControl',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'fireControlPageCtrl',
          title: '消防设施管理',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('fireControl.account', {
          invisable:true,
          url: '/account',
          templateUrl: 'app/pages/fireControl/account/account.html',
          title: '台账管理',
          sidebarMeta: {
            order: 0,
          },
        }).state('fireControl.law', {
          url: '/law',
          templateUrl: 'app/pages/fireControl/law/law.html',
          title: '消防站管理规定',
          sidebarMeta: {
            order: 100,
          },
        }).state('fireControl.duty', {
          url: '/duty',
          templateUrl: 'app/pages/fireControl/duty/duty.html',
          title: '岗位责任',
          sidebarMeta: {
            order: 101,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/fireControl','/fireControl/account');
  }

})();
