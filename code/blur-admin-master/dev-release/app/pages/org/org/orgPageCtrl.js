/**
 * @author Bruce
 * created on 2018.06.08
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.org')
    .controller('orgPageCtrl', orgPageCtrl);

  /** @ngInject */
  function orgPageCtrl($scope, $timeout, $http, $log, $uibModal,dataServiceURL) {
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
    // 弹窗方法
    $scope.open = function (page,selected) {
      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: page,
        size: '',
        // 如果要传值一定要在这里写controller
        controller: 'addNodeModalPageCtrl',
        resolve: {
          items: function () {
            return selected;
          }
        }
      });
      modalInstance.result.then(function (result) {
        // 在回调函数中写入新节点
        if (result) {
          var newNodeData = {
            id: selected+'_'+(newId++).toString(),
            parent: selected,
            icon: result.icon,
            text: result.name,
            state: {
              opened: true
            }
          }
          // console.log(newNodeData);
        }
        // 插入节点
        $scope.treeData.push(newNodeData);
        // console.log($scope.treeData);
        // 刷新节点
        $scope.basicConfig.version++;
        // 在刷新节点后进行数据库请求，避免加载过慢
        $http.post(dataServiceURL+"org/insertOrg",newNodeData,{'Content-Type': 'application/x-www-form-urlencoded'})
        .success(function (param) {
          console.log('数据插入成功' + param);
        }).error(function (err) {
          // 如果服务端请求失败则调用本地静态数据
          console.log('服务器连接失败，请检查网络' + err);
        })

      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    // 添加节点
    $scope.addNewNode = function () {
      $scope.ignoreChanges = true;
      var selected = this.orgTree.jstree(true).get_selected()[0];
      if (selected) {
        // 点击后弹出编辑窗口,之后的逻辑在modal的回调函数中写
        $scope.open('app/pages/org/org/addNodePage/addNodeModal.html',selected);
      } else {
        alert("您还没有选择节点，请先选择节点");
      }
      // $scope.basicConfig.version++;
    };

    $scope.refresh = function () {
      $scope.ignoreChanges = true;
      newId = 0;
      $scope.treeData = getDefaultData();
      $scope.basicConfig.version++;
    };
    // 展开
    $scope.expand = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = true;
      });
      $scope.basicConfig.version++;
    };
    // 折叠
    $scope.collapse = function () {
      $scope.ignoreChanges = true;
      $scope.treeData.forEach(function (n) {
        n.state.opened = false;
      });
      $scope.basicConfig.version++;
    };
    // 删除
    $scope.delNode = function(){
      $scope.ignoreChanges = true;
      var selected = this.orgTree.jstree(true).get_selected()[0];
      if (selected) {
        var url_delNode = dataServiceURL + 'org/delOrg?'
        var selectedNode = 'id='+selected;
        // 使用get请求删除，传递节点id
        $http.get(url_delNode + selectedNode).finally(function(data){
          alert("删除成功，请刷新页面");
          console.log(data);
          // 刷新
          $scope.basicConfig.version++;
        })
        
      } else {
        alert("您还没有选择节点，请先选择节点");
      }
    };
    $scope.readyCB = function () {
      $timeout(function () {
        $scope.ignoreChanges = false;
      });
    };


    $scope.applyModelChanges = function () {
      return !$scope.ignoreChanges;
    };
    // 获取树的数据，初始化
    function getDefaultData() {
      // $http.get('app/pages/org/org/org.json').success(function (param) {
      //   $scope.treeData = param;
      //   $scope.treeFlag = true;
      //   // 刷新jstree对象
      //   $scope.basicConfig.version++;
      // });
      // 开发时候用本地数据进行测试
      var url_local = "app/pages/org/org/org.json";
      var url_api = dataServiceURL + "org/getOrg";
      // console.log('获取数据');
      $http.get(url_local).success(function (param) {
        console.log(param);
        $scope.treeData = param;
        $scope.treeFlag = true;
        // 刷新jstree对象
        $scope.basicConfig.version++;
      }).error(function (err) {
        // 如果服务端请求失败则调用本地静态数据
        console.log('服务器连接失败，请检查网络' + err);
      })
    };
    getDefaultData();
  }
})();