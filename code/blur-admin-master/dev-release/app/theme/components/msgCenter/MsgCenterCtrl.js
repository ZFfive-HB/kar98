/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
      .controller('MsgCenterCtrl', MsgCenterCtrl);

  /** @ngInject */
  function MsgCenterCtrl($scope, $sce) {
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

    $scope.messages = [
      {
        userId: 3,
        text: 'After you get up and running, you can place Font Awesome icons just about...',
        time: '1 min ago'
      },
      {
        userId: 0,
        text: 'You asked, Font Awesome delivers with 40 shiny new icons in version 4.2.',
        time: '2 hrs ago'
      },
      {
        userId: 1,
        text: 'Want to request new icons? Here\'s how. Need vectors or want to use on the...',
        time: '10 hrs ago'
      },
      {
        userId: 2,
        text: 'Explore your passions and discover new ones by getting involved. Stretch your...',
        time: '1 day ago'
      },
      {
        userId: 3,
        text: 'Get to know who we are - from the inside out. From our history and culture, to the...',
        time: '1 day ago'
      },
      {
        userId: 1,
        text: 'Need some support to reach your goals? Apply for scholarships across a variety of...',
        time: '2 days ago'
      },
      {
        userId: 0,
        text: 'Wrap the dropdown\'s trigger and the dropdown menu within .dropdown, or...',
        time: '1 week ago'
      }
    ];

    $scope.getMessage = function(msg) {
      var text = msg.template;
      if (msg.userId || msg.userId === 0) {
        text = text.replace('&name', '<strong>' + $scope.users[msg.userId].name + '</strong>');
      }
      return $sce.trustAsHtml(text);
    };
  }
})();