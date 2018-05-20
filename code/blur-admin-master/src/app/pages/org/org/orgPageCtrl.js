/**
 * @author a.demeshko
 * created on 12/21/15
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.org')
    .controller('orgPageCtrl', orgPageCtrl);

  /** @ngInject */
  function orgPageCtrl($scope, $timeout) {

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
      var selected = this.basicTree.jstree(true).get_selected()[0];
      if (selected)
        $scope.treeData.push({
          id: (newId++).toString(),
          parent: selected,
          text: "新的组织 " + newId,
          state: {opened: true}
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

    $scope.readyCB = function() {
      $timeout(function() {
        $scope.ignoreChanges = false;
      });
    };


    $scope.applyModelChanges = function() {
      return !$scope.ignoreChanges;
    };

    $scope.treeData = getDefaultData();

    function getDefaultData() {
      return [
        {
          "id": "n1",
          "parent": "#",
          "type": "folder",
          "text": "安委会",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n2",
          "parent": "#",
          "type": "folder",
          "text": "领导部门",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n3",
          "parent": "#",
          "type": "folder",
          "text": "车间",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n5",
          "parent": "n1",
          "text": "主任",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n6",
          "parent": "n1",
          "text": "副主任",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n7",
          "parent": "n1",
          "text": "组员",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n8",
          "parent": "n1",
          "text": "Node 1.4",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n9",
          "parent": "n2",
          "text": "厂长",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n10",
          "parent": "n2",
          "text": "副厂长",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n11",
          "parent": "n2",
          "text": "书记",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n12",
          "parent": "n2",
          "text": "总工程师",
          "icon": "ion-help-buoy",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n14",
          "parent": "n3",
          "type": "folder",
          "text": "锅炉车间",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n131",
          "parent": "n14",
          "text": "车间主任",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n132",
          "parent": "n14",
          "text": "工人",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n15",
          "parent": "n3",
          "text": "汽机车间",
          "state": {
            "opened": true
          }
        },
        {
          "id": "n16",
          "parent": "n3",
          "text": "电气车间",
          "state": {
            "opened": true
          }
        },

      ]
    }


  }
})();