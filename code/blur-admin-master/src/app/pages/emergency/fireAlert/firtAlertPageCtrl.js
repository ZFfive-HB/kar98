/**
 * @author Bruce
 * created on 2018.06.08
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.emergency')
        .controller('fireAlertPageCtrl', fireAlertPageCtrl);

    /** @ngInject */

    function fireAlertPageCtrl($scope, $filter, $uibModal, msgCenter) {
        $scope.fireAlertData = [{
                id: 1,
                num: 'SY001fa',
                date: '2018-02-02',
                dept: '动火车间',
                person: 'Bruce',
                duty: '张三',
                stus: '0',
                locked: false
            },

        ];
        // 火警的实体类
        // class FireAlertData {
        //     // 构造函数
        //     constructor(id, num, date, dept, person, duty, stus, locked, ) {
        //         this.id = id;
        //         this.num = num;
        //         this.date = date;
        //         this.dept = dept;
        //         this.person = person;
        //         this.duty = duty;
        //         this.stus = stus;
        //         this.locked = locked;
        //     }
        // }
        // 暂不支持es6写法
        function FireAlertData(id, num, date, dept, person, duty, stus, locked) {
            this.id = id;
            this.num = num;
            this.date = date;
            this.dept = dept;
            this.person = person;
            this.duty = duty;
            this.stus = stus;
            this.locked = locked;
        };
        // 将报警信息实例化
        var getFireAlert = function (msg) {
            msg.map(function (v, i) {
                // id
                var id = i + 1;
                // 生成一个新的编号num
                var num = 'SY' + Date.now().toString(36).substr(3);
                // 当前时间
                var date = moment().format('YYYY-MM-DD');
                // 部门
                var dept = v.addr;
                // 报警人
                var person = 'Bruce';
                // 值长
                var duty = '管理员';
                // 状态，初始状态为0
                var stus = '0';
                // 是否归档
                var locked = false;

                var obj_fireAlert = new FireAlertData(id, num, date, dept, person, duty, stus, locked);
                $scope.fireAlertData.push(obj_fireAlert);
            });
        };
        getFireAlert(msgCenter.msg);
        // 指派状态
        $scope.stus = [{
                value: 0,
                text: '未指派'
            },
            {
                value: 1,
                text: '火警安全员'
            },
            {
                value: 2,
                text: '安全部主任'
            },
            {
                value: 3,
                text: '厂长办公室'
            },
            {
                value: 4,
                text: '系统管理员'
            },
            {
                value: 99,
                text: '已归档'
            },
        ];

        $scope.showStus = function (data) {
            var selected = [];
            selected = $filter('filter')($scope.stus, {
                value: data.stus
            });
            return selected[0].text;
        };
        // 归档操作
        $scope.fileLock = function (index, data) {
            // 弹出确认框
            $uibModal.open({
                animation: true,
                templateUrl: 'app/pages/emergency/fireAlert/confirmModal.html',
                size: 'md',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
            // 更改状态为已归档
            $scope.fireAlertData[index].stus = '99';
            // 将按钮变为不可选择
            $scope.fireAlertData[index].locked = true;


        }

    }

})();