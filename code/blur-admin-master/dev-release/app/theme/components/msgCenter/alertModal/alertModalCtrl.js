/**
 * @author Bruce
 * created on 2018.05.19
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.theme.components')
      .controller('alertModalCtrl', alertModalCtrl);
  
    /** @ngInject */
    function alertModalCtrl($scope,toastr,msgCenter) {
      // 报警按钮逻辑
      $scope.data = {}; //表单信息
      $scope.alertShow = true;
      //报警
      $scope.saveData = function () {
        // 保存数据
        msgCenter.msg.push($scope.data);
        // 更新报警数量
        msgCenter.countNum = msgCenter.msg.length;
        // // 应用内置函数关闭窗口
        this.$dismiss();
        // 首页提示信息
        msgCenter.showAlert();
        // 通过service向上发送报警数量
        msgCenter.alertNumChange();
       
      };
  
    }
  })();