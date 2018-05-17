/**
 * @author Bruce
 * created on 2018.05.15
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
          template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          controller: 'dangerPageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('danger.fire', {
          url: '/fire',
          title: '动火作业',
          templateUrl: 'app/pages/danger/fire/fire.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('danger.hight', {
          url: '/hight',
          title: '高处作业',
          templateUrl: 'app/pages/danger/hight/hight.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('danger.special', {
          url: '/special',
          title: '特种设备作业',
           templateUrl: 'app/pages/danger/special/special.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('danger.limited', {
          url: '/limited',
          title: '有限空间作业',
          templateUrl: 'app/pages/danger/limited/limited.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        });
  }

})();
