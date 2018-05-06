/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.safeEdu')
      .directive('calendar', calendar);

  /** @ngInject */
  function calendar() {
    return {
      restrict: 'E',
      controller: 'calendarCtrl',
      templateUrl: 'app/pages/safeEdu/inner/calendar/calendar.html'
    };
  }
})();