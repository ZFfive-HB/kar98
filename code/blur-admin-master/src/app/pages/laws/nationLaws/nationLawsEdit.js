(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.laws')
      .controller('nationLawsEditModalPageCtrl', nationLawsEditModalPageCtrl);
  
    /** @ngInject */
    function nationLawsEditModalPageCtrl($scope, $uibModalInstance, toastr, items, $filter, $http, dataServiceURL, params) {
      $scope.params = params;
      $scope.data = angular.copy(items);
      $scope.data.date = new Date(Date.parse($filter('date')($scope.data.date, "yyyy/MM/dd")));
      $scope.open = open;
      $scope.opened = false;
      $scope.options = {
          showWeeks: false
      };

      function open() {
          $scope.opened = true;
      }

  
      $scope.saveData = function () {
        // 返回新的节点信息
        console.info($scope.data);
        $http.post(dataServiceURL+"nationLaws/updateLaw",$scope.data,{'Content-Type': 'application/x-www-form-urlencoded'})
        .success(function (param) {
          console.log('数据修改成功' + param);
          toastr.success('修改成功!');
          $uibModalInstance.close();
          this.$dismiss();
        }).error(function (err) {
          // 如果服务端请求失败则调用本地静态数据
          console.log('服务器连接失败，请检查网络' + err);
        });
      };
  
    }
  })();