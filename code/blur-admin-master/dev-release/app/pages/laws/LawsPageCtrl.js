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

    $scope.nationLaws = [
      {
        "id": 1,
        "file_number":"国家安全生产监督管理总局令2007年第11号",
        "name": "注册安全工程师管理规定",
        "organization":"国家安全生产监督管理总局",
        "date":"2007-03-01",
        "status": 4,
        "group": 3
      },
      {
        "id": 2,
        "file_number":"环办[2014]33号",
        "name": "重点环境管理危险化学品目录",
        "organization":"国家环境保护部",
        "date":"2014-04-03",
        "status": 3,
        "group": 1
      },
      {
        "id": 3,
        "file_number":"根据2011年12月31日第十一届全国人民代表大会常务委员会第二十四次会议《关于修改〈中华人民共和国职业病防治法〉的决定》修正",
        "name": "中华人民共和国职业病防治法",
        "organization":"人大常委会",
        "date":"2016-07-20",
        "status": 3,
        "group": 2
      },
      {
        "id": 4,
        "file_number":"主席令第4号 ",
        "name": "中华人民共和国循环经济促进法",
        "organization":"人大常委会",
        "date":"2009-01-01",
        "group": 4
      },
      {
        "id": 5,
        "file_number":"主席令第6号 ",
        "name": "中华人民共和国消防法(2008修订)",
        "organization":"人大常委会",
        "date":"2009-05-01",
        "status": 1,
        "group": 1
      },
      {
        "id": 6,
        "file_number":"主席令第30号",
        "name": "中华人民共和国刑法修正案(九)",
        "organization":"全国人大",
        "date":"2018-11-01",
        "status": 4,
        "group": 2
      },
      {
        "id": 7,
        "file_number":"2004年3月14日第十届全国人民代表大会第二次会议通过的《中华人民共和国宪法修正案》修正",
        "name": "中华人民共和国宪法",
        "organization":"全国人大",
        "date":"2004-03-14",
        "status": 4,
        "group": 1
      },
      {
        "id": 8,
        "file_number":" 主席令第77号",
        "name": "中华人民共和国节约能源法（2007修订)",
        "organization":"人大常委会",
        "date":"2008-04-01",
        "status": 4,
        "group": 2
      },
      {
        "id": 9,
        "file_number":"主席令第73号",
        "name": "中华人民共和国劳动合同法（2013修订）",
        "organization":"全国人大常委会",
        "date":"2013-07-01",
        "status": 1,
        "group": 2
      },
      {
        "id": 10,
        "file_number":"主席令第39号",
        "name": "中华人民共和国水土保持法（2010修订）",
        "organization":"人大常委会",
        "date":"2011-03-01",
        "status": 1,
        "group": 3
      },
    ];



    // $scope.removeUser = function(index) {
    //   $scope.users.splice(index, 1);
    // };

    $scope.addLaw = function() {
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
      };
    
    editableOptions.theme = 'bs3';
    editableThemes['bs3'].submitTpl = '<button type="submit" class="btn btn-primary btn-with-icon"><i class="ion-checkmark-round"></i></button>';
    editableThemes['bs3'].cancelTpl = '<button type="button" ng-click="$form.$cancel()" class="btn btn-default btn-with-icon"><i class="ion-close-round"></i></button>';


  }

})();
