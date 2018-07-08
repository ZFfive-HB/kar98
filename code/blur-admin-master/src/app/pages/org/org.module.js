/**
 * @author Bruce
 * created on 2018.5.20
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.org', [])
      .config(routeConfig)
      .config(function(){
        $.jstree.defaults.core.themes.url = true;
        // $.jstree.defaults.core.themes.dir = "assets/img/theme/vendor/jstree/dist/themes";
      }).config(function(baConfigProvider){
        var layoutColors = baConfigProvider.colors;
        Morris.Donut.prototype.defaults.backgroundColor = 'transparent';
        Morris.Donut.prototype.defaults.labelColor = layoutColors.defaultText;
        Morris.Grid.prototype.gridDefaults.gridLineColor = layoutColors.borderDark;
        Morris.Grid.prototype.gridDefaults.gridTextColor = layoutColors.defaultText;
      });

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('org', {
          url: '/org',
          template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
          abstract: true,
          title: '组织机构',
          sidebarMeta: {
            icon: 'ion-ios-location-outline',
            order: 300,
          },
        })
        .state('org.org', {
          url: '/org',
          templateUrl: 'app/pages/org/org/org.html',
          controller: 'orgPageCtrl',
          title: '厂区人员角色',
          sidebarMeta: {
            order: 0,
          },
         
        })
        .state('org.AJHB', {
          url: '/AJHB',
          templateUrl: 'app/pages/org/AJHB/department.html',
          controller: 'departmentPageCtrl',
          title: '安健环部',
          sidebarMeta: {
            order: 100,
          },
        })
        .state('org.inv', {
          url: '/inv',
          templateUrl: 'app/pages/org/investment/investment.html',
          controller: 'invePageCtrl',
          title: '安全投入',
          sidebarMeta: {
            order: 200,
          },
        });
  }

})();
