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
            icon: 'ion-map',
            order: 100
          }
        }).state('laws.nationLaws', {
          invisable:true,
          url: '/nationLaws',
          params: {type:'1',name:'国家法律'},
          templateUrl: 'app/pages/laws/nationLaws/nationLaws.html',
          controller: 'nationLawsCtrl',
          title: '国家法律',
          sidebarMeta: {
            order: 0
          }
        }).state('laws.nationAdministrative', {
          url: '/nationAdministrative',
          params: {type:'2',name:'国家行政法规/规范'},
          templateUrl: 'app/pages/laws/nationAdministrative/nationAdministrative.html',
          controller: 'nationLawsCtrl',
          title: '国家行政法规/规范',
          sidebarMeta: {
            order: 100
          }
        }).state('laws.localLaws', {
          url: '/localLaws',
          params: {type:'3',name:'地方行政法规/规范'},
          templateUrl: 'app/pages/laws/localLaws/localLaws.html',
          controller: 'nationLawsCtrl',
          title: '地方行政法规/规范',
          sidebarMeta: {
            order: 101
          }
        }).state('laws.gov', {
          url: '/gov',
          params: {type:'4',name:'地方行政法规/规范'},
          templateUrl: 'app/pages/laws/gov/govLaws.html',
          controller: 'nationLawsCtrl',
          title: '政府部门规章/规范',
          sidebarMeta: {
            order: 102
          }
        }).state('laws.nationRules', {
          url: '/nationRules',
          params: {type:'5',name:'国家标准'},
          templateUrl: 'app/pages/laws/nationRules/nationRules.html',
          controller: 'nationLawsCtrl',
          title: '国家标准',
          sidebarMeta: {
            order: 103
          }
        }).state('laws.profession', {
          url: '/profession',
          params: {type:'6',name:'行业技术标准'},
          templateUrl: 'app/pages/laws/profession/profession.html',
          controller: 'nationLawsCtrl',
          title: '行业技术标准',
          sidebarMeta: {
            order: 104
          }
        }).state('laws.techData', {
          url: '/techData',
          params: {type:'7',name:'技术文件及资料'},
          templateUrl: 'app/pages/laws/techData/techData.html',
          controller: 'nationLawsCtrl',
          title: '技术文件及资料',
          sidebarMeta: {
            order: 105,
          },
        });
        // 默认显示
    $urlRouterProvider.when('/laws','/laws/nationLaws');
  }

})();
