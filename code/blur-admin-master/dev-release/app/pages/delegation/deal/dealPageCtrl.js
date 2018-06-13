/**
 * @author kongfy
 * created on 06.03.2018
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.delegation')
        .controller('dealPageCtrl', dealPageCtrl);

    /** @ngInject */
    function dealPageCtrl($scope,editableOptions, editableThemes) {
        $scope.dealList = [
            {
                id:1,
                name:'name',
                date:'2018-06-03',
                need:'Company1',
                provide:'Company1-1',
                needPerson:'xujian',
                providePerson:'kongfy',
                projectName:'name1',
                needSuper:'xujian1',
                provideSuper:'kongfy1',
            },
            {
                id:2,
                name:'name',
                date:'2018-06-03',
                need:'Company2',
                provide:'Company2-1',
                needPerson:'xujian',
                providePerson:'kongfy',
                projectName:'name2',
                needSuper:'xujian2',
                provideSuper:'kongfy2',
            },
            {
                id:3,
                name:'name',
                date:'2018-06-03',
                need:'Company3',
                provide:'Company3-1',
                needPerson:'xujian',
                providePerson:'kongfy',
                projectName:'name3',
                needSuper:'xujian3',
                provideSuper:'kongfy3',
            }
            
        ]
    }

})();