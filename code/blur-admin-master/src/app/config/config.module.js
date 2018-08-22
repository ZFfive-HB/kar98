/**
 * @author Bruce
 * created on 2018.8.20
 */
// 本地测试地址，默认4001端口
var url ="http://127.0.0.1:4001/";
(function () {
    'use strict';
  
    angular.module('BlurAdmin.config', [])
        .constant('dataServiceURL',url);
  
  
  })();
  