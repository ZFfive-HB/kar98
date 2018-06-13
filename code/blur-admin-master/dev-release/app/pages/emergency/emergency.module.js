/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.emergency', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('emergency', {
          url: '/emergency',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          // controller: 'LawsPageCtrl',
          title: '风险应急管理',
          sidebarMeta: {
            icon: 'ion-battery-charging',
            order: 1300,
          },
        }).state('emergency.sys', {
          url: '/sys',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '应急体系',
          sidebarMeta: {
            order: 0,
          },
        }).state('emergency.staff', {
          url: '/staff',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '应急资源',
          sidebarMeta: {
            order: 100,
          },
        }).state('emergency.plan', {
          url: '/plan',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '应急预案',
          sidebarMeta: {
            order: 101,
          },
        }).state('emergency.practice', {
          url: '/practice',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '救援演练',
          sidebarMeta: {
            order: 101,
          },
        }).state('emergency.fireAlert', {
          url: '/fireAlert',
          templateUrl: 'app/pages/emergency/fireAlert/fireAlert.html',
          controller: 'fireAlertPageCtrl',
          title: '火灾报警管理',
          sidebarMeta: {
            order: 101,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/emergency','/emergency/sys');
  }

})();
