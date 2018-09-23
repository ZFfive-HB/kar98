/**
 * @author Bruce
 * created on 2018.06.08
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.emergency')
        .controller('fireAlertPageCtrl', fireAlertPageCtrl);

    /** @ngInject */
    function fireAlertPageCtrl($scope, $filter, editableOptions, editableThemes, $uibModal, baProgressModal) {
        $scope.fireAlertData = [{
                id: 1,
                num: 'SY001fa',
                date: '2018-02-02',
                dept: '动火车间',
                person: 'Bruce',
<<<<<<< HEAD
                duty:'张三',
                stus: '未分配'
=======
                duty: '张三',
                stus: '0',
                locked: false
            },

        ];
        // 火警的实体类
        class FireAlertData {
            // 构造函数
            constructor(id, num, date, dept, person, duty, stus, locked, ) {
                this.id = id;
                this.num = num;
                this.date = date;
                this.dept = dept;
                this.person = person;
                this.duty = duty;
                this.stus = stus;
                this.locked = locked;
            }
        }

        // 将报警信息实例化
        var getFireAlert = function (msg) {
            msg.map((v, i) => {
                // id
                let id = i+1;
                // 生成一个新的编号num
                let num = 'SY' + Date.now().toString(36).substr(3);
                // 当前时间
                let date = moment().format('YYYY-MM-DD');
                // 部门
                let dept = v.addr;
                // 报警人
                let person = 'Bruce';
                // 值长
                let duty = '管理员';
                // 状态，初始状态为0
                let stus = '0';
                // 是否归档
                let locked = false;

                let obj_fireAlert = new FireAlertData(id, num, date, dept, person, duty, stus, locked);
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
>>>>>>> parent of 169d3b7... 修正es6语法不能打包问题
            },
            {
                id: 2,
                num:'GY009fa',
                date: '2018-02-02',
                dept: '动火车间',
                person: 'Bruce',
                duty:'张三',
                stus: '未分配'
            }
        ];


    }

})();