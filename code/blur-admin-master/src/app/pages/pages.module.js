/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages', [
    'ui.router',
    // 看板首页
    'BlurAdmin.pages.dashboard',
    // 'BlurAdmin.pages.ui',
    // 'BlurAdmin.pages.components',
    // 表单控件
    // 'BlurAdmin.pages.form',
    // 'BlurAdmin.pages.tables',
    // 'BlurAdmin.pages.charts',
    // 'BlurAdmin.pages.maps',
    // 基本信息
    'BlurAdmin.pages.profile',
    // 版本文档
    'BlurAdmin.pages.testPage',
    // 法律法规
    'BlurAdmin.pages.laws',
    // 企业管理制度
    'BlurAdmin.pages.management',
    // 安全生产组织机构
    'BlurAdmin.pages.org',
    // 安全教育
    'BlurAdmin.pages.safeEdu',
    // 安全档案
    'BlurAdmin.pages.safeFile',
    // 外委企业管理
    'BlurAdmin.pages.commission',
    // 危险作业管理
    'BlurAdmin.pages.danger',
    // 普通作业管理
    'BlurAdmin.pages.normal',
    // 特种设备管理
    'BlurAdmin.pages.special',
    // 危险物品管理
    'BlurAdmin.pages.dangerStaff',
    // 重大危险源
    'BlurAdmin.pages.majorDanger',
    // 消防设施管理
    'BlurAdmin.pages.fireControl',
    // 安全检查
    'BlurAdmin.pages.security',
    // 事故隐患处理
    'BlurAdmin.pages.hiddenTrouble',
    // 绩效考核
    'BlurAdmin.pages.evaluate',
    // 风险应急管理
    'BlurAdmin.pages.emergency',
  ])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($urlRouterProvider, baSidebarServiceProvider) {
    $urlRouterProvider.otherwise('/dashboard');
    // 静态页面
    baSidebarServiceProvider.addStaticItem({
      title: '基础页面',
      icon: 'ion-document',
      subMenu: [
      //   {
      //   title: '登录',
      //   fixedHref: 'auth.html',
      //   blank: true
      // },
       {
        title: '注册/登录',
        fixedHref: 'reg.html',
        blank: true
      }, {
        title: '个人信息设置',
        stateRef: 'profile',
      }, {
        title: '404 Page',
        fixedHref: '404.html',
        blank: true
      }]
    });
    // baSidebarServiceProvider.addStaticItem({
    //   title: 'Menu Level 1',
    //   icon: 'ion-ios-more',
    //   subMenu: [{
    //     title: 'Menu Level 1.1',
    //     disabled: true
    //   }, {
    //     title: 'Menu Level 1.2',
    //     subMenu: [{
    //       title: 'Menu Level 1.2.1',
    //       disabled: true
    //     }]
    //   }]
    // });
  }

})();
