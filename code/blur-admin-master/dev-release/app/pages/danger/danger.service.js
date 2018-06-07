/**
 * @author v.Bruce
 * created on 2018.05.19
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.page.danger')
    .service('danger', danger);

  /** @ngInject */
  function danger($rootScope) {
    //模态窗弹出的方法
    this.openModal = function(page,size){
      $uibModal.open({
        animation: true,
        templateUrl: page,
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    };
  }

})();