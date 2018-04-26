/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.normal', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('normal', {
          url: '/normal',
          abstract:true,
          title: '普通作业管理',
          // 工作票、操作票
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('normal.apply', {
          url: '/apply',
          title: '作业申请',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('normal.record', {
          url: '/record',
          title: '记录查询',
          // 巡检记录、交接班记录、实验记录
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        });
  }

})();
