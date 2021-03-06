/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.safeFile')
        .controller('safeFilePageCtrl', safeFilePageCtrl);
  
    /** @ngInject */
    function safeFilePageCtrl($scope, $filter, editableOptions, editableThemes) {
      $scope.smartTablePageSize = 10;
  
      $scope.threeTableData = [
        {
            id : "1",
            proName:"国家2007年三同时执行标准",
            level : "一级",
            date : "2008-02-11",
            dept : "安全保卫科",
            stage : "实施"
        },
        {
            id : "2",
            proName:"省级2005年一同时执行标准",
            level : "二级",
            date : "2006-04-01",
            dept : "生产科",
            stage : "生产"
        },
        {
            id : "3",
            proName:"省级2012年三同时执行标准",
            level : "二级",
            date : "2015-06-10",
            dept : "安全保卫科",
            stage : "实施"
        },
        {
            id : "4",
            proName:"国家2000年执行标准",
            level : "一级",
            date : "2001-11-11",
            dept : "生产科",
            stage : "生产"
        },
        {
            id : "5",
            proName:"国家2007年三同时执行标准",
            level : "一级",
            date : "2008-02-01",
            dept : "安全保卫科",
            stage : "实施"
        },
        {
            id : "6",
            proName:"省级2009年执行标准",
            level : "二级",
            date : "2014-09-11",
            dept : "安全保卫科",
            stage : "实施"
        },
        {
            id : "7",
            proName:"国家2007年三同时执行标准",
            level : "一级",
            date : "2011-02-11",
            dept : "生产科",
            stage : "生产"
        },
        {
            id : "8",
            proName:"国家2001年三同时执行标准",
            level : "一级",
            date : "2002-02-11",
            dept : "安全保卫科",
            stage : "实施"
        },
        {
            id : "9",
            proName:"省级2017年执行标准",
            level : "二级",
            date : "2018-02-11",
            dept : "安全保卫科",
            stage : "实施"
        },
        {
            id : "10",
            proName:"国家2007年三同时执行标准",
            level : "一级",
            date : "2008-02-11",
            dept : "安全保卫科",
            stage : "实施"
        },
      ];
      $scope.fixTableData = [
        {
            id : "1",
            area : "厂前区",
            bigLevel : "复烤生产线",
            smallLevel : "解包挑选设备",
            num : "LYTS.CC.04DDD5",
            name : "电动巡逻车",
            dept : "安全保卫科",
            addNum : "地理区域编号",
            result : "合格"
        },
        {
            id : "1",
            area : "厂前区",
            bigLevel : "复烤生产线",
            smallLevel : "解包挑选设备",
            num : "LYTS.CC.04DDD5",
            name : "电动巡逻车",
            dept : "安全保卫科",
            addNum : "GX.3.1.3.1.2",
            result : "合格"
        },
        {
            id : "2",
            area : "生产区",
            bigLevel : "物流运输",
            smallLevel : "机械手",
            num : "LYTS.DD.04DDD4",
            name : "铣床动力臂",
            dept : "安全保卫科",
            addNum : "GX.3.1.3.1.2",
            result : "合格"
        },
        {
            id : "3",
            area : "仓库",
            bigLevel : "工业梯台",
            smallLevel : "钢直梯",
            num : "LYTS.CC.04DDD2",
            name : "上架直梯",
            dept : "安全保卫科",
            addNum : "GX.3.1.3.1.2",
            result : "不合格"
        },
        {
            id : "4",
            area : "厂前区",
            bigLevel : "空压系统",
            smallLevel : "空压机",
            num : "LYTS.CC.04DDD5",
            name : "包装空压机",
            dept : "安全保卫科",
            addNum : "GX.3.1.3.1.2",
            result : "不合格"
        },
      ];
    }
  
  })();
  