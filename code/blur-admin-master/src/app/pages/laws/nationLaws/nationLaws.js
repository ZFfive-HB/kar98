/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.laws')
        .controller('nationLawsCtrl', nationLawsCtrl);

    /** @ngInject */
    function nationLawsCtrl($scope, $filter, editableOptions, editableThemes,$location, $http, $uibModal, dataServiceURL) {
        $scope.nationLaws = [];
        $scope.queryLaw = function(){
            var url_local = dataServiceURL+"nationLaws/getLaws";
            $http.get(url_local).success(function (param) {
                console.log(param);
                $scope.nationLaws = param;
                
                //push不好使，列表不更新
/*                     $scope.nationLaws.push({
                        "id": 22,
                        "file_number":"22主席令第30号",
                        "name": "22中华人民共和国刑法修正案(九)",
                        "organization":"22全国人大",
                        "date":"22018-11-01"
                    }); */
	                       /* $scope.$apply(function() {
                               $scope.nationLaws.push({
                                   "id": 22,
                                   "file_number":"22主席令第30号",
                                   "name": "22中华人民共和国刑法修正案(九)",
                                   "organization":"22全国人大",
                                   "date":"22018-11-01"
                               });
	                       }); */
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
                      return $scope.nationLaws[index];
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
                      return $scope.nationLaws[index];
                    }
                }
            });
        };

        // 跳转删除页面
        $scope.removeLaw = function(index, id) {
            /* $http.post(dataServiceURL+"nationLaws/deleteLaw",{id:id},{'Content-Type': 'application/x-www-form-urlencoded'}).success(function () {
                toastr.success('删除成功!');
                $scope.nationLaws.splice(index, 1);
                $scope.queryLaw();
            }).error(function (err) {
                console.log('服务器连接失败，请检查网络' + err);
            })  */
        };

        // 上传附件
        $scope.upload = function () {
            var fileInput = document.getElementById('uploadFile');
            fileInput.click();
        };

        $scope.queryLaw();

        editableOptions.theme = 'bs3';
        editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
        editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';

    }

})();
