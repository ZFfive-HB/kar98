/**
 * @author v.Bruce
 * created on 2018.05.19
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme.components')
    .service('msgCenter', msgCenter);

  /** @ngInject */
  function msgCenter($rootScope,toastr) {
    // 报警信息
    this.msg = []
    // 提示信息
    this.showAlert = function () {
      // 每次报警后需要重新触发所有报警
      var i = 0;
      // 初始化页面时候检查书否有报警信息
      if (this.msg.length != 0) {
        while (i < this.msg.length) {
          var addr = this.msg[i].addr;
          var text = this.msg[i].context;
          // showErrorMsg(addr,text);
          toastr.error(text, addr+'发生火警');
          i += 1;
        };
      }

    };
    //广播报警数量
    this.alertNumChange = function(){
      $rootScope.$broadcast('num',this.msg.length);
      // console.log('发送'+this.msg.length);
    };
    // 火警信息列表
    this.addFireAlertList = function(){
      
    };
  }

})();