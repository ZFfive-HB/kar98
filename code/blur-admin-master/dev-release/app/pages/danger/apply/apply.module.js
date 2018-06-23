/**
 * @author Bruce
 * created on 2018.05.15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.danger.apply', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('danger.apply', {
          url: '/apply',
          title: '动火作业申请',
          templateUrl: 'app/pages/danger/apply/apply.html',
          controller: 'applyPageCtrl',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        });
  }

})();
