import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Schedule, ScheduleModel, TimelineViews, TimelineMonth, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import * as dataSource from './datasource.json';
import { extend } from '@syncfusion/ej2-base';
/**
 * schedule resources group sample
 */
Schedule.Inject(TimelineViews, TimelineMonth, Resize, DragAndDrop);


    
    let scheduleOptions: ScheduleModel = {
        width: '100%',
        height: '650px',
        selectedDate: new Date(2018, 3, 4),
        //views: ['TimelineDay', 'TimelineWeek', 'TimelineMonth'],
        views: [
            { displayName: 'Days', option: 'TimelineDay', interval: 1 },
            { displayName: 'Weeks', option: 'TimelineWeek', isSelected: true, interval: 1 },
            { displayName: 'Months', option: 'TimelineMonth', interval: 1 }
        ],        
        currentView: 'TimelineMonth',
        rowAutoHeight: true,
        group: {
            resources: ['Projects', 'People']
        },
        resources: [
            {
                field: 'ProjectId', title: 'Client / Project', name: 'Projects',
                dataSource: [
                    { text: 'Website A', id: 1, color: '#cb6bb2' },
                    { text: 'Website B', id: 2, color: '#56ca85' },
                    { text: 'Website C', id: 3, color: '#df5286' }
                ],
                textField: 'text', idField: 'id', colorField: 'color'
            }, {
                field: 'TaskId', title: 'People',
                name: 'People', allowMultiple: true,
                dataSource: [
                    { text: 'Jeffry', id: 1, groupId: 1, color: '#df5286' },
                    { text: 'Iman', id: 2, groupId: 1, color: '#7fa900' },
                    { text: 'Hilmy', id: 3, groupId: 2, color: '#ea7a57' },
                    { text: 'Nanny', id: 4, groupId: 2, color: '#5978ee' },
                    { text: 'Ana', id: 5, groupId: 3, color: '#df5286' },
                    { text: 'Rizky', id: 6, groupId: 3, color: '#00bdae' }
                ],
                textField: 'text', idField: 'id', groupIDField: 'groupId', colorField: 'color'
            }
        ],
        eventSettings: {
            dataSource: <Object[]>extend([], (dataSource as any).resourceData.concat((dataSource as any).timelineResourceData), null, true)
        }
    };

    let scheduleObj: Schedule = new Schedule(scheduleOptions, '#Schedule');
