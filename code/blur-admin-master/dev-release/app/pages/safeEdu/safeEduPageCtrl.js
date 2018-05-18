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
        $scope.eduTableData = [
            {
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
            },
            {
                id: "2",
                num: "PXLA12012874",
                cate: "安全生产",
                name: "安全生产检测师",
                persion: "郭华龙",
                sex: "男",
                dept: "安全保卫科",
                perDate: "2018-04-01",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "3",
                num: "PXLA12003454",
                cate: "安全生产",
                name: "生产实施师",
                persion: "孙希子",
                sex: "女",
                dept: "生产部",
                perDate: "2017-09-10",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "4",
                num: "PXLA12014854",
                cate: "安全生产",
                name: "安全生产督导师",
                persion: "徐健康",
                sex: "男",
                dept: "安全保卫科",
                perDate: "2017-01-01",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "5",
                num: "PXLA12012874",
                cate: "安全生产",
                name: "生产检测师",
                persion: "郭晓龙",
                sex: "男",
                dept: "生产部",
                perDate: "2010-04-01",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "6",
                num: "PXLA12003454",
                cate: "安全生产",
                name: "安全生产实施师",
                persion: "冷冰",
                sex: "女",
                dept: "安全保卫科",
                perDate: "2017-09-10",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "7",
                num: "PXLA12014854",
                cate: "安全生产",
                name: "安全生产督导师",
                persion: "徐晓健",
                sex: "男",
                dept: "安全保卫科",
                perDate: "2007-01-01",
                eduDept: "省级就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "8",
                num: "PXLA12012874",
                cate: "安全生产",
                name: "生产检测师",
                persion: "吴华",
                sex: "男",
                dept: "生产部",
                perDate: "2008-04-01",
                eduDept: "省级就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "9",
                num: "PXLA12003454",
                cate: "安全生产",
                name: "生产实施师",
                persion: "冷晓",
                sex: "女",
                dept: "生产部",
                perDate: "2017-09-10",
                eduDept: "省级就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "10",
                num: "PXLA12013424",
                cate: "安全生产",
                name: "安全生产督导师",
                persion: "邱东",
                sex: "男",
                dept: "安全保卫科",
                perDate: "2007-01-30",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "11",
                num: "PXLA12012274",
                cate: "安全生产",
                name: "母猪产后护理",
                persion: "西子",
                sex: "女",
                dept: "动物委员会",
                perDate: "2011-01-01",
                eduDept: "国家就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
            {
                id: "12",
                num: "PXLA12004454",
                cate: "安全生产",
                name: "安全生产实施师",
                persion: "万德",
                sex: "女",
                dept: "信息安全科",
                perDate: "2008-09-10",
                eduDept: "省级就业培训技术指导中心",
                deuDate: "--",
                isCancel: "否"
            },
    ];
    }

})();