/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.org')
    .controller('orgPageCtrl', orgPageCtrl);

  /** @ngInject */
  function orgPageCtrl($scope, $timeout, $http,$log) {
    $scope.ignoreChanges = false;
    var newId = 0;
    $scope.ignoreChanges = false;
    $scope.newNode = {};

    $scope.basicConfig = {
      core: {
        multiple: false,
        check_callback: true,
        worker: true
      },
      'types': {
        'folder': {
          'icon': 'ion-ios-folder'
        },
        'default': {
          'icon': 'ion-document-text'
        }
      },
      'plugins': ['types'],
      'version': 1
    };
    $scope.addNewNode = function () {
      $scope.ignoreChanges = true;
      var selected = this.orgTree.jstree(true).get_selected()[0];
      if (selected)
        $scope.treeData.push({
          id: (newId++).toString(),
          parent: selected,
          text: "新的组织 " + newId,
          state: {
            opened: true
          }
        });
      $scope.basicConfig.version++;
    };

    $scope.refresh = function () {
      $scope.ignoreChanges = true;
      newId = 0;
      $scope.treeData = getDefaultData();
      $scope.basicConfig.version++;
    };
   
    $scope.expand = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = true;
      });
      $scope.basicConfig.version++;
    };

    $scope.collapse = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = false;
      });
      $scope.basicConfig.version++;
    };

    $scope.readyCB = function () {
      $timeout(function () {
        $scope.ignoreChanges = false;
      });
    };


    $scope.applyModelChanges = function () {
      return !$scope.ignoreChanges;
    };

    // $scope.treeData = getDefaultData();
    
    
    // getDefaultData()
    // 获取树的数据
    function getDefaultData() {
        $http.get('app/pages/org/org/org.json').success(function (param) {
          $scope.treeData = param;
          $scope.treeFlag = true;
          // 刷新jstree对象
          $scope.basicConfig.version++;
        });
      };
    getDefaultData();
  }
})();