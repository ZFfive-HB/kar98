/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.security', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
      .state('security', {
        url: '/security',
        template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
        // templateUrl: 'app/pages/security/security.html',
        abstract: true,
        title: '安全检查',
        controller: 'securityPageCtrl',
        sidebarMeta: {
          icon: 'ion-qr-scanner',
          order: 1000,
        },
      })
      .state('security.account', {
        url: '/account',
        templateUrl: 'app/pages/security/account/security.html',
        // abstract: true,
        title: '安全检查台账',
        sidebarMeta: {
          order: 500,
        },
      })
      .state('security.add', {
        url: '/add',
        templateUrl: 'app/pages/security/add/add.html',
        // abstract: true,
        title: '安全检查台账添加',
        // controller:'securityPageCtrl',
        sidebarMeta: {
          order: 500,
        },
      })
      .state('security.department', {
        url: '/department',
        templateUrl: 'app/pages/security/department.html',
        // abstract: true,
        title: '部门安全检查',
        // controller:'securityPageCtrl',
        sidebarMeta: {
          order: 500,
        }
      })
      .state('security.company', {
        url: '/company',
        templateUrl: 'app/pages/security/company.html',
        // abstract: true,
        title: '企业安全检查',
        // controller:'securityPageCtrl',
        sidebarMeta: {
          order: 500,
        }
      })
      .state('security.daily', {
        url: '/daily',
        templateUrl: 'app/pages/security/daily.html',
        // abstract: true,
        title: '日常安全检查',
        // controller:'securityPageCtrl',
        sidebarMeta: {
          order: 500,
        }
      });
  }

})();