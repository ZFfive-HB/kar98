/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.safeEdu')
        .controller('safeEduPageCtrl', safeEduPageCtrl);

    /** @ngInject */
    function safeEduPageCtrl($scope, $filter, editableOptions, editableThemes) {
        $scope.smartTablePageSize = 10;

        $scope.innerTableData = [{
            id: "1",
            month: "五月",
            num: "LYABB20190208",
            project: "地震知识培训",
            cate: "其它",
            persion: "各部门员工",
            addr: "场内"


        }];

        //   资格证table数据
        $scope.eduTableData = [{
            id: "1",
            num: "PXLA12014854",
            cate: "安全生产",
            name: "安全生产督导师",
            persion: "徐健",
            sex: "男",
            dept: "安全保卫科",
            perDate: "2017-01-01",
            eduDept: "国家就业培训技术指导中心",
            deuDate: "--",
            isCancel: "否"

        }];
    }

})();