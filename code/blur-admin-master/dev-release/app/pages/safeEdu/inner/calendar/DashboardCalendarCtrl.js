/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .controller('DashboardCalendarCtrl', DashboardCalendarCtrl);

  /** @ngInject */
  function DashboardCalendarCtrl(baConfig) {
    alert(111);
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
        var title = prompt('在此添加事件...');
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
          title: '公司目标计划',
          start: '2016-05-01',
          color: dashboardColors.silverTree
        },
        {
          title: '工作计划跟踪',
          start: '2018-05-07',
          end: '2018-03-10',
          color: dashboardColors.blueStone
        },
        {
          title: '安全工作总结',
          start: '2018-05-14T20:00:00',
          color: dashboardColors.surfieGreen
        },
        {
          title: '公司安全工作总结',
          start: '2018-04-01T07:00:00',
          color: dashboardColors.gossipDark
        }
      ]
    });
  }
})();