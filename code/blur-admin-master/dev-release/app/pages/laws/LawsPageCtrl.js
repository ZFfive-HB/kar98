/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.laws')
      .controller('LawsPageCtrl', LawsPageCtrl);

  /** @ngInject */
  function LawsPageCtrl($scope, $filter, editableOptions, editableThemes,$location) {
    
    // $scope.smartTablePageSize = 20;


    // $scope.editableTableData = $scope.smartTableData.slice(0, 36);

    //$scope.nationLaws = [];



    // $scope.removeUser = function(index) {
    //   $scope.users.splice(index, 1);
    // };

    /* $scope.addLaw = function() {
      $scope.inserted = {
        id: $scope.nationLaws.length+1,
        file_number:"",
        name: "",
        organization:"",
        date:"",
        status: null,
        group: null
      };
      $scope.nationLaws.push($scope.inserted);
    };
    // 跳转编辑页面
    $scope.editLaw = function(){
        // $location.path();
      console.log(  
      $('#editContent')
      );
    };
    // 跳转删除页面
      $scope.editLaw = function(){
          // $location.path();
          console.log(
              $('#editContent')
          );
      }; */
    
    /* editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>'; */


  }

})();
