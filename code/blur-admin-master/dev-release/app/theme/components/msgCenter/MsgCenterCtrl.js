/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce, $uibModal,toastr) {
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

    $scope.notifications = [{
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
    // 报警按钮逻辑
    var alertMsg = []; //保存报警信息
    $scope.data = {}; //表单信息
    var alertNum = 0; //报警的数量
    $scope.saveData = function () {
      // 保存数据
      alertMsg.push($scope.data);
      // 添加报警次数
      alertNum += 1;
      // 应用内置函数关闭窗口
      this.$dismiss();
      // 首页提示信息
      showAlert($scope.data);

    };

    // 首页提示信息
    var showAlert = function () {
      // 每次报警后需要重新触发所有报警
      let i = 0;
      // 初始化页面时候检查书否有报警信息
      if (alertMsg != undefined || alertMsg.length != 0) {
        while (i < alertNum) {
          var addr = alertMsg[i].addr;
          var text = alertMsg[i].context;
          showErrorMsg(addr,text);
          i += 1;
        };
      }

    }

    // 弹出提示窗方法
    var showErrorMsg = function(addr,text) {
      toastr.error(text, addr+'发生火警');
    };
    // $scope.openProgressDialog = baProgressModal.open;
  }
})();