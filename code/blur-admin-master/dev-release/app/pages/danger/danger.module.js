/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.danger', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('danger', {
          url: '/danger',
          abstract:true,
          title: '危险作业管理',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('danger.fire', {
          url: '/fire',
          title: '动火作业',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('danger.hight', {
          url: '/hight',
          title: '高处作业',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('danger.special', {
          url: '/special',
          title: '特种设备作业',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        }).state('danger.limited', {
          url: '/limited',
          title: '有限空间作业',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
        });
  }

})();
