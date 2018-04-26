/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.commission', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('commission', {
          url: '/commission',
          title: '外委企业管理',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.right', {
          url: '/right',
          title: '资质管理',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.deal', {
          url: '/deal',
          title: '安全协议',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.detail', {
          url: '/detail',
          title: '安全交底',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.acceptance', {
          url: '/acceptance',
          title: '安全验收',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.lesson', {
          url: '/lesson',
          title: '作业培训',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.monitoring', {
          url: '/monitoring',
          title: '监督检查',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('commission.radiation', {
          url: '/radiation',
          title: '电离辐射作业',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        });
  }

})();
