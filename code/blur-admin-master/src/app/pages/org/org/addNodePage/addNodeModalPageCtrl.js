/**
 * @author Bruce
 * created on 2018.07.01
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.org')
    .controller('addNodeModalPageCtrl', addNodeModalPageCtrl);

  /** @ngInject */
  function addNodeModalPageCtrl($scope,$uibModalInstance,items) {
    $scope.data = {
      parent:items,
      icon:'',
      name:"",
    }; 

    // //确认按钮
    $scope.saveData = function (data) {
      // console.log("确认");
      // 保存数据
      // console.log(data);
      // if($scope.data.icon == "人员"){
      //   $scope.data.icon = "ion-person";
      // }
      // 返回新的节点信息
      $uibModalInstance.close($scope.data);
      this.$dismiss();

    };

  }
})();