/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.security')
    .controller('securityPageCtrl', securityPageCtrl);

  /** @ngInject */
  function securityPageCtrl($scope,$location) {
    $scope.PageSize = 10;
    // $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    // 企业、部门、日常
    $scope.items = [{
        "id": 1,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 2,
        "cate": "部门",
        "checkTime": "2018-05-10",
        "persion": "李四",
        "pullsorce": "电脑、打印机",
        "dept": "工会",
        "area": "南浦房",
        "accident": "火灾、触电",
        "porblem": "电气设备老化"
      },
      {
        "id": 3,
        "cate": "日常",
        "checkTime": "2018-05-29",
        "persion": "王五",
        "pullsorce": "违反劳动纪律",
        "dept": "党委",
        "area": "党委办公室",
        "accident": "其它伤害",
        "porblem": "作业期间玩手机"
      },
      {
        "id": 4,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "饮水机使用",
        "dept": "第3车间",
        "area": "休息区域",
        "accident": "细菌滋生",
        "porblem": "连续煮沸产生有害物质"
      },
      {
        "id": 5,
        "cate": "日常",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "不安全行为",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "车辆伤害",
        "porblem": "厂区车速过快"
      },
      {
        "id": 6,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 7,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 8,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 9,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 10,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 11,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 12,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
      {
        "id": 13,
        "cate": "企业",
        "checkTime": "2018-05-08",
        "persion": "张三",
        "pullsorce": "消防设施",
        "dept": "党委办公室",
        "area": "党委办公室",
        "accident": "火灾",
        "porblem": "未按要求点检、维护"
      },
    ];

  }

})();