/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dangerStaff', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('dangerStaff', {
          url: '/dangerStaff',
          // abstract:true,
          title: '危险物品管理',
          // templateUrl: 'app/pages/profile/profile.html',
          // controller: 'ProfilePageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        });
  }

})();
