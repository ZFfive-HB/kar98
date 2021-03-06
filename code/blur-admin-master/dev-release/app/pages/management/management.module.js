/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.management', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('management', {
          url: '/management',
          template : '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'managementPageCtrl',
          title: '企业管理制度',
          sidebarMeta: {
            icon: 'fa fa-building-o',
            order: 200
          }
        }).state('management.safe', {
          url: '/safe',
          templateUrl: 'app/pages/management/safe/safe.html',
          title: '安全管理制度',
          sidebarMeta: {
            order: 0
          }
        }).state('management.goal', {
          url: '/goal',
          templateUrl: 'app/pages/management/goal/goal.html',
          title: '企业目标计划',

          sidebarMeta: {
            order: 100
          }
        }).state('management.Deptgoal', {
          url: '/Deptgoal',
          templateUrl: 'app/pages/management/Deptgoal/deptgoal.html',
          title: '部门目标计划',
          sidebarMeta: {
            order: 101
          }
        });
        // 默认显示
    $urlRouterProvider.when('/management','/management/safe');
  }

})();
