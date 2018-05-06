/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.laws', [])
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('laws', {
          url: '/laws',
          template : '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          controller: 'LawsPageCtrl',
          title: '安全生产法律法规',
          sidebarMeta: {
            icon: 'ion-grid',
            order: 300
          }
        }).state('laws.nationLaws', {
          invisable:true,
          url: '/nationLaws',
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          controller: 'nationLawsCtrl',
          title: '国家法律',
          sidebarMeta: {
            order: 0
          }
        }).state('laws.nationAdministrative', {
          url: '/nationAdministrative',
          templateUrl: 'app/pages/laws/nationAdministrative/nationAdministrative.html',
          title: '国家行政法规/规范',

          sidebarMeta: {
            order: 100
          }
        }).state('laws.localLaws', {
          url: '/localLaws',
          templateUrl: 'app/pages/laws/localLaws/localLaws.html',
          title: '地方行政法规/规范',
          sidebarMeta: {
            order: 101
          }
        }).state('laws.gov', {
          url: '/gov',
          templateUrl: 'app/pages/laws/gov/govLaws.html',
          title: '政府部门规章/规范',
          sidebarMeta: {
            order: 102
          }
        }).state('laws.nationRules', {
          url: '/nationRules',
          templateUrl: 'app/pages/laws/nationRules/nationRules.html',
          title: '国家标准',
          sidebarMeta: {
            order: 103
          }
        }).state('laws.profession', {
          url: '/profession',
          templateUrl: 'app/pages/laws/profession/profession.html',
          title: '行业技术标准',
          sidebarMeta: {
            order: 104
          }
        }).state('laws.techData', {
          url: '/techData',
          templateUrl: 'app/pages/laws/techData/techData.html',
          title: '技术文件及资料',
          sidebarMeta: {
            order: 105,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/laws','/laws/nationLaws');
  }

})();
