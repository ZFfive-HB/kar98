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
            icon: 'ion-checkmark',
            order: 1200,
          },
        }).state('evaluate.selfish', {
          url: '/selfish',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          title: '绩效自评',
          sidebarMeta: {
            order: 100,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/improvement','/improvement/grade');
  }

})();
