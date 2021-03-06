/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.delegation', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('delegation', {
          url: '/delegation',
          abstract:true,
          title: '外委单位管理',
          template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-log-out',
            order: 600
          }
        }).state('delegation.aptitude', {
          url: '/aptitude',
          // abstract:true,
          title: '资质管理',
          templateUrl: 'app/pages/delegation/aptitude/aptitude.html',
          controller: 'delegationPageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('delegation.deal', {
          url: '/deal',
          // abstract:true,
          title: '安全协议',
          templateUrl: 'app/pages/delegation/deal/deal.html',
          controller: 'dealPageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('delegation.deadLine', {
          url: '/deadLine',
          // abstract:true,
          title: '安全交底',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('delegation.check', {
          url: '/check',
          abstract:true,
          title: '安全验收',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('delegation.edu', {
          url: '/edu',
          abstract:true,
          title: '外委作业培训',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('delegation.supervise', {
          url: '/supervise',
          abstract:true,
          title: '监督检查情况',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        });
  }

})();
