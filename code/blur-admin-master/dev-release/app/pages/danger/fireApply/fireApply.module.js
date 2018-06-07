/**
 * @author Bruce
 * created on 2018.05.15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.danger.fireApply', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('fireApply', {
          url: '/fireApply',
          title: '动火作业申请',
          templateUrl: 'app/pages/danger/apply/apply.html',
          controller: 'fireApplyPageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        });
  }

})();
