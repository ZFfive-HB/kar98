(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.laws').controller('nationLawsViewModalPageCtrl', nationLawsViewModalPageCtrl);
  
    function nationLawsViewModalPageCtrl($scope,$uibModalInstance,toastr,items) {
      $scope.data = angular.copy(items);
    }
})();