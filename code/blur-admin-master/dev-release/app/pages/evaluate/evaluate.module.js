/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.evaluate', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('evaluate', {
          url: '/evaluate',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          // controller: 'LawsPageCtrl',
          title: '绩效考核',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300,
          },
        }).state('improvement.grade', {
          url: '/grade',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '绩效评分',
          sidebarMeta: {
            order: 0,
          },
        }).state('evaluate.selfish', {
          url: '/selfish',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '绩效自评',
          sidebarMeta: {
            order: 100,
          },
        }).state('improvement.improvement', {
          url: '/improvement',
          // templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '持续改进',
          sidebarMeta: {
            order: 101,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/improvement','/improvement/grade');
  }

})();
