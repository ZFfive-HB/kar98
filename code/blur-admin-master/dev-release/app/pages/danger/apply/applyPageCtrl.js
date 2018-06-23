/**
 * @author Bruce
 * created on 2018.05.27
 * @deprecated
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.danger.apply')
      .controller('applyPagelCtrl', applyPageCtrl);

  /** @ngInject */
  function applyPageCtrl($scope) {

    $scope.standardSelectItems = [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
      { label: 'Option 4', value: 4 },
    ];

  }

})();
