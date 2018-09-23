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
                duty:'张三',
                stus: '未分配'
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