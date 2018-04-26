/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.profile')
    .controller('ProfilePageCtrl', ProfilePageCtrl);

  /** @ngInject */
  function ProfilePageCtrl($scope, fileReader, $filter, $uibModal) {
    $scope.picture = $filter('profilePicture')('safeLogo');

    $scope.removePicture = function () {
      $scope.picture = $filter('appImage')('theme/no-photo.png');
      $scope.noPicture = true;
    };

    $scope.uploadPicture = function () {
      var fileInput = document.getElementById('uploadFile');
      fileInput.click();

    };

    $scope.socialProfiles = [
      {
        name: '检查计划',
        href: '#',
        icon: 'ion-calendar'
      },
      {
        name: '危险作业',
        href: '#',
        icon: 'ion-nuclear'
      },
      {
        name: '安全检查',
        icon: 'ion-eye'
      },
      {
        name: '安全培训',
        href: '#',
        icon: 'ion-university'
      },
      {
        name: '达标规范',
        href: '#',
        icon: 'ion-document-text'
      },
    ];

    $scope.unconnect = function (item) {
      item.href = undefined;
    };

    $scope.showModal = function (item) {
      $uibModal.open({
        animation: false,
        controller: 'ProfileModalCtrl',
        templateUrl: 'app/pages/profile/profileModal.html'
      }).result.then(function (link) {
          item.href = link;
        });
    };
    // 下载文件
    $scope.getFile = function () {
      fileReader.readAsDataUrl($scope.file, $scope)
          .then(function (result) {
            $scope.picture = result;
          });
    };

    // $scope.switches = [true, true, false, true, true, false];
  }

})();
