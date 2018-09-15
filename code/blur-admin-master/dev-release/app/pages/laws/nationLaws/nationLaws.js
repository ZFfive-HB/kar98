/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.laws')
        .controller('nationLawsCtrl', nationLawsCtrl);

    /** @ngInject */
    function nationLawsCtrl($scope, $filter, editableOptions, editableThemes,$location, $http, $uibModal, dataServiceURL, toastr) {
        $scope.nationLawsPageSize = 10;
        $scope.queryLaw = function(){
            var url = dataServiceURL+"nationLaws/getLaws";
            //var url = "app/pages/laws/nationLaws/nationLaws.json";
            $http.get(url).success(function (param) {
                $scope.nationLawsArray = param;
            }).error(function (err) {
                // 如果服务端请求失败则调用本地静态数据
                console.log('服务器连接失败，请检查网络' + err);
            })
        };
       
        $scope.addLaw = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'nationLawsAddModalPageCtrl',
                templateUrl: 'app/pages/laws/nationLaws/nationLawsAdd.html',
                size: ''
            });
            modalInstance.result.then(function (result) {
                // 在回调函数中写入新节点
                if (result) {
                    //$scope.nationLaws.push(angular.copy(result));
                    $scope.queryLaw();
                }
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        // 跳转编辑页面
        $scope.editLaw = function(index){
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'nationLawsEditModalPageCtrl',
                templateUrl: 'app/pages/laws/nationLaws/nationLawsEdit.html',
                size: '',
                resolve: {
                    items: function () {
                      return $scope.nationLawsArray[index];
                    }
                }
            });
            modalInstance.result.then(function () {
                $scope.queryLaw();
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.viewLaw = function(index){
            var modalInstance = $uibModal.open({
                animation: true,
                controller: 'nationLawsViewModalPageCtrl',
                templateUrl: 'app/pages/laws/nationLaws/nationLawsView.html',
                size: '',
                resolve: {
                    items: function () {
                      return $scope.nationLawsArray[index];
                    }
                }
            });
        };

        // 跳转删除页面
        $scope.removeLaw = function(index, id) {
            $http.post(dataServiceURL+"nationLaws/deleteLaw?id="+id).success(function () {
                toastr.success('删除成功!');
                $scope.nationLawsArray.splice(index, 1);
                $scope.queryLaw();
            }).error(function (err) {
                console.log('服务器连接失败，请检查网络' + err);
            })
        };

        // 上传附件
        $scope.upload = function () {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();
        };

        $scope.queryLaw();
    }

})();
