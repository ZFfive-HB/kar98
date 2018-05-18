/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.majorDanger', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('majorDanger', {
          url: '/majorDanger',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          // controller: 'LawsPageCtrl',
          title: '重大危险源管理',
          sidebarMeta: {
            icon: 'ion-nuclear',
            order: 800,
          },
        }).state('majorDanger.info', {
          invisable:true,
          url: '/nationLaws',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '基础信息管理',
          sidebarMeta: {
            order: 0,
          },
        }).state('majorDanger.online', {
          url: '/nationAdministrative',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '在线检测',

          sidebarMeta: {
            order: 100,
          },
        }).state('majorDanger.mediator', {
          url: '/mediator',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '视频监控',
          sidebarMeta: {
            order: 101,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/mediator','/mediator/info');
  }

})();
