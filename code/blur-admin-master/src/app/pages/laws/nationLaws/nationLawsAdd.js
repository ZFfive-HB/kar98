(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.laws')
      .controller('nationLawsAddModalPageCtrl', nationLawsAddModalPageCtrl);
  
    /** @ngInject */
    function nationLawsAddModalPageCtrl($scope, $uibModalInstance, toastr, $http, dataServiceURL, params) {
      $scope.params = params;
      $scope.data = {
        type:params.type
      }; 

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
        $http.post(dataServiceURL+"nationLaws/insertLaw",$scope.data,{'Content-Type': 'application/x-www-form-urlencoded'})
        .success(function (param) {
          console.log('数据插入成功' + param);
          toastr.success('新增成功!');
          $uibModalInstance.close($scope.data);
        }).error(function (err) {
          // 如果服务端请求失败则调用本地静态数据
          console.log('服务器连接失败，请检查网络' + err);
        })
        /* toastr.success('新增成功!');
        $scope.data.id = 100; */
        //$uibModalInstance.close($scope.data);
        //this.$dismiss();
      };

      $scope.upload = function () {
        var fileInput = document.getElementById('uploadFile');
        fileInput.click();
      };
  
    }
  })();