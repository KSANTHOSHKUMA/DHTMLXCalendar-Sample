import { Component, OnInit, ViewChild, Output, EventEmitter, ElementRef, ViewEncapsulation } from '@angular/core';

import "dhtmlx-scheduler";
declare let scheduler: any;

@Component({
    selector: 'app-book-appointment-day-view',
    templateUrl: './shedular-day.component.html',
    encapsulation: ViewEncapsulation.None
})

export class SchedulerDayViewComponent implements OnInit {

    bookAppointmentData: any = {};
    bookAppointmentDataTemp: any[] = [];
    events: any[] = [];
    scheduler: any;

    @ViewChild("dayscheduler") daySchedulerContainer: ElementRef;

    constructor(
    ) { }

    ngOnInit() {
        this.scheduler = scheduler;
        this.scheduler.config.xml_date = "%m/%d/%Y";
        this.scheduler.init(this.daySchedulerContainer.nativeElement, new Date(), "month");

        var events = [
            { id: 11, text: "Meeting", start_date: "04/11/2018", end_date: "04/11/2018" },
            { id: 21, text: "Conference", start_date: "04/15/2018", end_date: "04/18/2018" },
            { id: 31, text: "Interview", start_date: "04/24/2018", end_date: "04/24/2018" }
        ];

        this.scheduler.parse(events, "json");
    }

}