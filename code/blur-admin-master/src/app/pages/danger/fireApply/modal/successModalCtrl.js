/**
 * @author Bruce
 * created on 2018.05.27
 * @deprecated
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.danger')
        .controller('successModalCtrl', successModalCtrl);
  
    /** @ngInject */
    function successModalCtrl($scope,$uibModalInstance,items) {
        $scope.role = items.label;
        $scope.content = items.text;
    }
  
  })();
  