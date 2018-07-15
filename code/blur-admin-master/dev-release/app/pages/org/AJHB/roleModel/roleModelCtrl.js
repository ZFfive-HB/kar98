/**
 * @author Bruce
 * created on 2018.06.08
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.org')
      .controller('roleModelCtrl', roleModelCtrl);
  
    /** @ngInject */
    function roleModelCtrl($scope, $timeout, $http,$log,$uibModal) {
    
        $scope.roleInformationData = [
            {
                id : "1",
                depatementName:"厂长",
                role : "厂长",
                employName : "sex健",
                sex : "男"
            },
            {
                id : "2",
                depatementName:"厂长",
                role : "厂长",
                employName : "sex健",
                sex : "男"
            },
          ];
        
  
      
    
    
    
    
    }
  })();