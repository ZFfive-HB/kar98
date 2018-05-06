/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.safeEdu')
      .controller('calendarCtrl', calendarCtrl);

  /** @ngInject */
  function calendarCtrl(baConfig) {
    var dashboardColors = baConfig.colors.dashboard;
    var $element = $('#calendar').fullCalendar({
      //height: 335,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2018-05-01',
      selectable: true,
      selectHelper: true,
      select: function (start, end) {
        var title = prompt('在此添加培训计划');
        var eventData;
        if (title) {
          eventData = {
            title: title,
            start: start,
            end: end
          };
          $element.fullCalendar('renderEvent', eventData, true); // stick? = true
        }
        $element.fullCalendar('unselect');
      },
      editable: true,
      eventLimit: true, // allow "more" link when too many events
      events: [
        {
          title: '地震知识培训',
          start: '2016-05-01',
          color: dashboardColors.silverTree
        },
        {
          title: '环保知识培训',
          start: '2018-05-07',
          end: '2018-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: '环保法培训',
          start: '2018-05-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: '节假日期间安全教育',
          start: '2018-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();