/**
 * @author Bruce
 * created on 2018.06.08
 */
(function () {
    'use strict';
  
    angular.module('BlurAdmin.pages.org')
      .controller('departmentPageCtrl', departmentPageCtrl);
  
    /** @ngInject */
    function departmentPageCtrl($scope, $timeout, $http,$log,$uibModal) {
      //$scope.smartTablePageSize = 10;
    
        $scope.departmentData = [
          {
              id : "1",
              depatementName:"厂长",
              level : "一级部门",
              principal : "厂长",
              higherOffice : "无",
              role : "厂长"
          },
           {
              id : "2",
              depatementName:"总经理工作部",
              level : "二级部门",
              principal : "厂长",
              higherOffice : "厂长",
              role : "副厂长"
          },
          {
              id : "3",
              depatementName:"总经理工作部",
              level : "二级部门",
              principal : "厂长",
              higherOffice : "厂长",
              role : "总工"
          },
          {
              id : "4",
              depatementName:"总经理工作部",
              level : "二级部门",
              principal : "厂长",
              higherOffice : "厂长",
              role : "副总工"
          },
          {
              id : "5",
              depatementName:"总经理工作部",
              level : "二级部门",
              principal : "厂长",
              higherOffice : "厂长",
              role : "总会计师"
          },
          {
              id : "6",
              depatementName:"总经理工作部",
              level : "二级部门",
              principal : "厂长",
              higherOffice : "厂长",
              role : "纪委书记兼工会主席"
          },
          {
              id : "7",
              depatementName:"总经理工作部",
              level : "二级部门",
              principal : "厂长",
              higherOffice : "厂长",
              role : "总经济师"
          },
          {
            id : "8",
            depatementName:"党群工作部",
            level : "二级部门",
            principal : "厂长",
            higherOffice : "厂长",
            role : ""
          },
          {
            id : "9",
            depatementName:"人力资源部",
            level : "三级部门",
            principal : "副厂长",
            higherOffice : "总经理工作部",
            role : "部长"
          }, 
          {
            id : "10",
            depatementName:"信息工作部",
            level : "三级部门",
            principal : "副厂长",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "11",
            depatementName:"工会",
            level : "三级部门",
            principal : "副厂长",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "12",
            depatementName:"监察审计部",
            level : "三级部门",
            principal : "副厂长",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "13",
            depatementName:"燃料部",
            level : "三级部门",
            principal : "副厂长",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "14",
            depatementName:"财务部",
            level : "三级部门",
            principal : "会计师",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "15",
            depatementName:"物质供应部",
            level : "三级部门",
            principal : "总工",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "16",
            depatementName:"后勤保障部",
            level : "三级部门",
            principal : "总工",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "17",
            depatementName:"安全环保部",
            level : "三级部门",
            principal : "安全总监",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "18",
            depatementName:"保卫部",
            level : "三级部门",
            principal : "安全总监",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "19",
            depatementName:"消防工作部",
            level : "三级部门",
            principal : "安全总监",
            higherOffice : "总经理工作部",
            role : ""
          }, 
          {
            id : "20",
            depatementName:"生产运行部",
            level : "三级部门",
            principal : "副总工",
            higherOffice : "总经理工作部",
            role : ""
          }, 
        ];
  
      // 编辑人员
      $scope.open = function(page, size){
        $uibModal.open({
          animation: true,
          templateUrl: page,
          size: size,
          controller:'roleModelCtrl',
          resolve: {
            items: function () {
              return $scope.items;
            }
          }
        });
      };
    
    
    
    
    }
  })();