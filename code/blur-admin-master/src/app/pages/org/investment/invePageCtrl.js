/**
 * @author Bruce
 * created on 2018.06.08
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.org')
      .controller('invePageCtrl', invePageCtrl);
  
    /** @ngInject */
    function invePageCtrl($scope,$window, baConfig) {

    var layoutColors = baConfig.colors;
    $scope.colors = [layoutColors.primary, layoutColors.warning, layoutColors.danger, layoutColors.info, layoutColors.success, layoutColors.primaryDark];
    $scope.lineData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.areaData = [
      {y: "2006", a: 100, b: 90},
      {y: "2007", a: 75, b: 65},
      {y: "2008", a: 50, b: 40},
      {y: "2009", a: 75, b: 65},
      {y: "2010", a: 50, b: 40},
      {y: "2011", a: 75, b: 65},
      {y: "2012", a: 100, b: 90}
    ];
    $scope.barData = [
      {y: "2006", a: 100, b: 9},
      {y: "2007", a: 75, b: 6},
      {y: "2008", a: 50, b: 0},
      {y: "2009", a: 75, b: 5},
      {y: "2010", a: 50, b: 14},
      {y: "2011", a: 75, b: 4},
      {y: "2012", a: 190, b: 90}
    ];
    $scope.donutData = [
      {label: "防护用品", value: 12},
      {label: "技术措施", value: 30},
      {label: "教育培训", value: 20},
      {label: "职工体检", value: 40},
      {label: "社会保险", value: 120},
      
    ];

    angular.element($window).bind('resize', function () {
      //$window.Morris.Grid.prototype.redraw();
    });
    }
  })();