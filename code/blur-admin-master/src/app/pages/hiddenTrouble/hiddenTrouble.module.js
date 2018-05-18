/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.hiddenTrouble', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('hiddenTrouble', {
          url: '/hiddenTrouble',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          // controller: 'LawsPageCtrl',
          title: '事故隐患处理',
          sidebarMeta: {
            icon: 'fa fa-eye-slash',
            order: 1100,
          },
        }).state('hiddenTrouble.rule', {
          url: '/rule',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '管理制度',
          sidebarMeta: {
            order: 0,
          },
        }).state('hiddenTrouble.account', {
          url: '/account',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '事故隐患台账',
          sidebarMeta: {
            order: 100,
          },
        }).state('hiddenTrouble.trail', {
          url: '/trail',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '隐患处理跟踪',
          sidebarMeta: {
            order: 101,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/hiddenTrouble','/hiddenTrouble/nationLaws');
  }

})();
