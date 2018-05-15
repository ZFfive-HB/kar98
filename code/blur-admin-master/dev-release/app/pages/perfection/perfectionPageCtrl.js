/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.perfection')
      .controller('perfectionPageCtrl', perfectionPageCtrl);

  /** @ngInject */
  function perfectionPageCtrl($scope, $filter, editableOptions, editableThemes,$uibModal, baProgressModal) {

    // $scope.smartTablePageSize = 10;

    // $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    // 绩效考核数据
    $scope.contributionData = [
      {
        id : 1,
        stus : '考核中',
        num : 'LY00098',
        name : '年终考评',
        start : '2018/05/05',
        deadline : '2018/06/05',
        dept : '分公司',
        major : 'Bruce',

      },
    ];
  
  
    $scope.showGroup = function(user) {
      if(user.group && $scope.groups.length) {
        var selected = $filter('filter')($scope.groups, {id: user.group});
        return selected.length ? selected[0].text : 'Not set';
      } else return 'Not set'
    };

    $scope.showStatus = function(user) {
      var selected = [];
      if(user.status) {
        selected = $filter('filter')($scope.statuses, {value: user.status});
      }
      return selected.length ? selected[0].text : 'Not set';
    };


    $scope.removeUser = function(index) {
      $scope.users.splice(index, 1);
    };

    $scope.addUser = function() {
      $scope.inserted = {
        id: $scope.users.length+1,
        name: '',
        status: null,
        group: null
      };
      $scope.users.push($scope.inserted);
    };

    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    // 添加页面
    $scope.open = function (page, size) {
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
    $scope.openProgressDialog = baProgressModal.open;

  }

})();
