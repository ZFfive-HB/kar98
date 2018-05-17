/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.danger')
      .controller('dangerPageCtrl', dangerPageCtrl);

  /** @ngInject */
  function dangerPageCtrl($scope, $filter, editableOptions, editableThemes,$uibModal, baProgressModal) {

    // $scope.smartTablePageSize = 10;

    // $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    // 动火作业数据
    $scope.fireDatas = [
      {
        id:'1',
        num:'LY009123',
        dept: '大修厂',
        addr:'大修厂第五车间',
        reason : '焊接',
        deadline : '2018-09-01',
        phone : '19800902983',
        opeater:'王小丫',
        guardian: '张三',
        strus : '正常'
      },
    ];
    // 高处作业
    $scope.hightDatas = [
      {
        id:'1',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
    ];
    // 特种设备作业
    $scope.specialDatas = [
      {
        id:'1',
        num:'LY009123',
        name : '臭徐建',
        concluson : '检测结论',
        apartment : '经办部门',
        persion:'经办人员',
        summary: '报告摘要',
        madeName : '制单人名',
        madeDate : '制单日期',
        category : '设备类别',
        isOrNo : '是否外委',
        strus : '操作'
      },
    ];
   
  
  
    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : '未填写';
      } else return '未填写'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    // 添加页面
    $scope.open = function (page, size) {
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
    $scope.openProgressDialog = baProgressModal.open;

  }

})();
