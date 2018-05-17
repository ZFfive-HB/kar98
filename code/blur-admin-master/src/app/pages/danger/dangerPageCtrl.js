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
      {
        id:'2',
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
      {
        id:'3',
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
      {
        id:'4',
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
      {
        id:'5',
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
      {
        id:'6',
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
      {
        id:'7',
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
      {
        id:'8',
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
      {
        id:'9',
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
      {
        id:'10',
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
      {
        id:'11',
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
      {
        id:'2',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'3',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'4',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'5',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'6',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'7',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'8',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'9',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'10',
        num:'LY009123',
        height : '291',
        addr : '厂房外部',
        dept : '焊接厂',
        persion:'王小丫',
        date: '2018/09/09',
        strus : '正常'
      },
      {
        id:'11',
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
      {
        id:'2',
        num:'LY009133',
        name : '臭徐建2',
        concluson : '检测结论2',
        apartment : '经办部门2',
        persion:'经办人员2',
        summary: '报告摘要2',
        madeName : '制单人名2',
        madeDate : '制单日期2',
        category : '设备类别2',
        isOrNo : '是否外委2',
        strus : '操作'
      },
      {
        id:'3',
        num:'LY009143',
        name : '臭徐建3',
        concluson : '检测结论3',
        apartment : '经办部门3',
        persion:'经办人员3',
        summary: '报告摘要3',
        madeName : '制单人名3',
        madeDate : '制单日期3',
        category : '设备类别3',
        isOrNo : '是否外委3',
        strus : '操作'
      },
      {
        id:'4',
        num:'LY009153',
        name : '臭徐建4',
        concluson : '检测结论4',
        apartment : '经办部门4',
        persion:'经办人员4',
        summary: '报告摘要4',
        madeName : '制单人名4',
        madeDate : '制单日期4',
        category : '设备类别4',
        isOrNo : '是否外委4',
        strus : '操作'
      },
      {
        id:'5',
        num:'LY009163',
        name : '臭徐建5',
        concluson : '检测结论5',
        apartment : '经办部门5',
        persion:'经办人员5',
        summary: '报告摘要5',
        madeName : '制单人名5',
        madeDate : '制单日期5',
        category : '设备类别5',
        isOrNo : '是否外委5',
        strus : '操作'
      },
      {
        id:'6',
        num:'LY009173',
        name : '臭徐建6',
        concluson : '检测结论6',
        apartment : '经办部门6',
        persion:'经办人员6',
        summary: '报告摘要6',
        madeName : '制单人名6',
        madeDate : '制单日期6',
        category : '设备类别6',
        isOrNo : '是否外委6',
        strus : '操作'
      },
      {
        id:'7',
        num:'LY009173',
        name : '臭徐建7',
        concluson : '检测结论7',
        apartment : '经办部门7',
        persion:'经办人员7',
        summary: '报告摘要7',
        madeName : '制单人名7',
        madeDate : '制单日期7',
        category : '设备类别7',
        isOrNo : '是否外委7',
        strus : '操作'
      },
      {
        id:'8',
        num:'LY009173',
        name : '臭徐建8',
        concluson : '检测结论8',
        apartment : '经办部门8',
        persion:'经办人员8',
        summary: '报告摘要8',
        madeName : '制单人名8',
        madeDate : '制单日期8',
        category : '设备类别8',
        isOrNo : '是否外委8',
        strus : '操作'
      },
      {
        id:'9',
        num:'LY009173',
        name : '臭徐建9',
        concluson : '检测结论9',
        apartment : '经办部门9',
        persion:'经办人员9',
        summary: '报告摘要9',
        madeName : '制单人名9',
        madeDate : '制单日期9',
        category : '设备类别9',
        isOrNo : '是否外委9',
        strus : '操作'
      },
      {
        id:'10',
        num:'LY009173',
        name : '臭徐建10',
        concluson : '检测结论10',
        apartment : '经办部门10',
        persion:'经办人员10',
        summary: '报告摘要10',
        madeName : '制单人名10',
        madeDate : '制单日期10',
        category : '设备类别10',
        isOrNo : '是否外委10',
        strus : '操作'
      },
      {
        id:'11',
        num:'LY009173',
        name : '臭徐建11',
        concluson : '检测结论11',
        apartment : '经办部门11',
        persion:'经办人员11',
        summary: '报告摘要11',
        madeName : '制单人名11',
        madeDate : '制单日期11',
        category : '设备类别11',
        isOrNo : '是否外委11',
        strus : '操作'
      },
      {
        id:'12',
        num:'LY009173',
        name : '臭徐建12',
        concluson : '检测结论12',
        apartment : '经办部门12',
        persion:'经办人员12',
        summary: '报告摘要12',
        madeName : '制单人名12',
        madeDate : '制单日期12',
        category : '设备类别12',
        isOrNo : '是否外委12',
        strus : '操作'
      },
    ];
    // 有限空间作业
    $scope.limitedDatas = [
      {
        id:'1',
        num:'LY009123',
        dept: '大修厂',
        addr:'大修厂第五车间',
        reason : '焊接',
        deadline : '2018-09-01',
        phone : '19800902983',
        opeater:'王五',
        guardian: '李四',
        strus : '正常'
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
