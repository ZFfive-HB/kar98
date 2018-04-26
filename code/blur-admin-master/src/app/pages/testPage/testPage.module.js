/**
 * @author bruce
 * created on 18.04.17
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.testPage', [])
        .config(routeConfig);
  
    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
        .state('testPage', {
          url: '/testPage',
          templateUrl: 'app/pages/testPage/testPage.html',
          title: '版本记录',
          sidebarMeta: {
            order: 8800,
            icon: 'ion-edit',
          },
        });
    }
  
  })();
  