/**
 * @author Bruce
 * created on 2018.05.27
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.danger')
    .controller('fireApplyPageCtrl', fireApplyPageCtrl);

  /** @ngInject */
  function fireApplyPageCtrl($scope, $uibModal, baProgressModal, toastr) {
    // 审批角色数据
    $scope.roles = [{
        label: '工人角色',
        value: 1,
        text: '拥有添加、提交和删除的权限'
      },
      {
        label: '车间主任',
        value: 2,
        text: '拥有通过和退回的权限'
      },
      {
        label: '生产运行部值长',
        value: 3,
        text: '拥有通过和退回的权限'
      },
      {
        label: '消防安全部主任',
        value: 4,
        text: '拥有通过和退回的权限'
      },
      {
        label: '安全生产部主任',
        value: 5,
        text: '拥有通过和退回的权限'
      },
      {
        label: '副厂长',
        value: 6,
        text: '拥有通过和退回的权限'
      },
    ];

    // 按钮显示
    $scope.roleCtrl = false;

    // 数据状态
    $scope.dataStrus = [
      '已保存', '已提交', '待审批', '已审批', '退回', '归档'
    ];
    // 动火原因数据
    $scope.reasons = [{
        id: 1,
        text: 'user'
      },
      {
        id: 2,
        text: 'customer'
      },
      {
        id: 3,
        text: 'vip'
      },
      {
        id: 4,
        text: 'admin'
      }
    ];
    // 动火申请数据
    $scope.fireApplyDatas = [{
      id: '1',
      num: 'LY009123',
      dept: '01班',
      addr: '大修厂第五车间',
      reason: '焊接',
      deadline: '2018-09-01',
      phone: '19800902983',
      opeater: '王五',
      guardian: '李四',
      strus: '已保存'
    }];
    $scope.roleSelected = {
      label: '工人角色(默认)',
      value: 1
    };
    // 当前数据状态
    // $scope.showStrus = function(index){
    //   var flag = '状态检查';
    //   // 工人角色
    //   if($scope.roleSelected == 1){
    //     if(fireApplyDatas[index].strus[1]){
    //       // 已提交
    //       return $scope.dataStrus[0]
    //     }else{
    //       // 已保存
    //     }
    //   };

    // };

    // 点击确认角色后提醒页面当前角色以及状态
    $scope.open = function (page, size) {
      console.log($scope.roleSelected.value);
      // 改变按钮状态
      if ($scope.roleSelected.value === 1) {
        $scope.roleCtrl = false;
      } else {
        // console.log('其它角色');
        $scope.roleCtrl = true;
      };
      // 模态提示窗
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        controller: 'successModalCtrl',
        resolve: {
          items: function () {
            // console.log($scope.roleSelected);
            return $scope.roleSelected;
          }
        }
      });
    };
    $scope.openProgressDialog = baProgressModal.open;
    // 新建申请
    $scope.addApply = function () {
      $scope.inserted = {
        id: $scope.fireApplyDatas.length + 1,
        num: '',
        dept: '',
        addr: '',
        reason: null,
        deadline: '',
        phone: '',
        opeater: '',
        guardian: '',
        strus: '保存'
      };
      $scope.fireApplyDatas.push($scope.inserted);
    };
    // 删除申请
    $scope.delete = function (index) {
      $scope.fireApplyDatas.splice(index, 1);
      console.log("删除", index);
    };

    // 动火原因选项
    $scope.showReason = function (data) {
      if (data.reason && $scope.reasons.length) {
        var selected = $filter('filter')($scope.reasons, {
          id: data.reason
        });
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    // 提交操作
    $scope.apply = function (index) {
      var arry = $scope.fireApplyDatas;
      // console.log(arry,index);
      for (var i = 0, len = arry.length; i < len; i++) {
        if (arry[i].id == index + 1) {
          // 找到下一步角色
          try {
            var role = $scope.roles[$scope.roleSelected.value].label;
            arry[i].strus = role + '待审批';
          } catch (err) {
            console.log('审批周期结束');
            arry[i].strus = '归档';
          }
        }
      }
    };

    // 通过操作
    $scope.pass = function (index) {
      var obj = $scope.fireApplyDatas[index];
      obj.strus = '通过';
    };

    //退回操作
    $scope.sendBack = function (index) {
      $uibModal.open({
        animation: true,
        templateUrl: 'app/pages/danger/fireApply/modal/sendBackModal.html',
        size: '',
        controller: 'sendBackModalCtrl',
        resolve: {
          role: function () {
            // console.log($scope.roleSelected);
            return $scope.roles[$scope.roleSelected.value].label;
          }
        }
      });
      var arry = $scope.fireApplyDatas;
      for (var i = 0, len = arry.length; i < len; i++) {
        if (arry[i].id == index + 1) {
          var role = $scope.roles[$scope.roleSelected.value - 2].label;
          // console.log(role);
          arry[i].strus = role + '待审批';
        }
      }
    }
  }

})();