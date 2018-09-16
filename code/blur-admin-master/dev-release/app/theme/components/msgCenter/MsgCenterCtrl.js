/**
 * @author Bruce
 * created on 2018.05.19
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce, $rootScope, $uibModal, toastr, msgCenter) {
    $scope.users = {
      0: {
        name: 'safeLogo',
      },
      1: {
        name: '徐健',
      },
      2: {
        name: '王世海',
      },
      3: {
        name: 'safeLogo',
      }
    };

    $scope.notifications = [
      {
        userId: 0,
        template: '&name 动火作业审批',
        time: '1 分钟之前'
      },
      {
        userId: 1,
        template: '&name 高空作业审批',
        time: '2 小时之前'
      },
      {
        image: 'assets/img/checkIn.svg',
        template: '设备检测登记',
        time: '5 小时以前'
      },
      {
        userId: 2,
        template: '&name 高空作业审批',
        time: '1 天以前'
      },
      // {
      //   userId: 3,
      //   template: 'Today is &name\'s birthday.',
      //   time: '2 days ago'
      // },
      {
        image: 'assets/img/appraise.svg',
        template: '2017年度武汉东昌公司绩效评价',
        time: '3 天前'
      },
    ];

    $scope.messages = [{
        img: 'fire',
        userId: 3,
        text: '火灾报警',
        time: '1 min ago'
      },
      {
        img: 'eletronic',
        userId: 0,
        text: '停电报警',
        time: '2 hrs ago'
      }
    ];

    // 遍历所有提示信息，暂时先不用
    $scope.getMessage = function (msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
    // 展开报警弹窗
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
    // 初始化报警数量
    $scope.alertNum = msgCenter.msg.length;
    if($scope.alertNum == 0){
      $scope.alertShow = false;
    }else{
      $scope.alertShow = true;
    }
    // 接收报警信息
    $scope.$on('num',function(){
        //更新数据 
      $scope.alertNum = msgCenter.msg.length;
        // 显示提示
      $scope.alertShow = true;
    });
    
  }
})();