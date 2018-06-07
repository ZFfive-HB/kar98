/**
 * @author Bruce
 * created on 2018.05.27
 * @deprecated
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.danger')
        .controller('sendBackModalCtrl', sendBackModalCtrl);
  
    /** @ngInject */
    function sendBackModalCtrl($scope,$uibModalInstance,role) {
        $scope.role = role;
        // $scope.content = items.text;
        
    }
  
  })();
  