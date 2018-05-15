/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.delegation')
      .controller('delegationPageCtrl', delegationPageCtrl);

  /** @ngInject */
  function delegationPageCtrl($scope, $filter, editableOptions, editableThemes,$uibModal, baProgressModal) {

    // $scope.smartTablePageSize = 10;

    // $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    // 资质管理数据
    $scope.qyzzDetials = [
      {
        id : 1,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '消防设施维护保养',
        xgfl : '设备维修保养方',//相关分类
        major : '安全保卫科',
        isImp : '是',
        persion : '徐健',//项目负责人
        phone : '20918872890'
      },
      {
        id : 2,
        name : '沈阳特种设备有限公司',
        cate : '业务类',//项目类别
        content : '特种设备检修',
        xgfl : '设备维修保养方',//相关分类
        major : '安全保卫科',
        isImp : '是',
        persion : '张三',//项目负责人
        phone : '02498298377'
      },
      {
        id : 3,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      },
      {
        id : 4,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      },
      {
        id : 5,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      },
      {
        id : 6,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      },
      {
        id : 7,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      },
      {
        id : 8,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      },
      {
        id : 9,
        name : '广西南宁共安消防设施维护有限公司',
        cate : '业务类',//项目类别
        content : '',
        xgfl : '',//相关分类
        major : '',
        isImp : '',
        persion : '',//项目负责人
        phone : ''
      }

    ]
   
  
  
    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
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
