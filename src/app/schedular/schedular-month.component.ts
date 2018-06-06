import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from "@angular/core";

import "dhtmlx-scheduler";

@Component({
    selector: 'schedular-month-view',
    templateUrl: './schedular-month.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SchedularMonthComponent implements OnInit {

    @ViewChild("schedulerhere") schedulerContainer: ElementRef;
    scheduler: any;

    ngOnInit() {

        this.scheduler.init(this.schedulerContainer, new Date(), "month");
        this.scheduler.config.xml_date = "%Y/%m/%d %H:%i";

        var events = [
            { id: 1, text: "Meeting", start_date: "04/11/2018 14:00", end_date: "04/11/2018 17:00" },
            { id: 2, text: "Conference", start_date: "04/15/2018 12:00", end_date: "04/18/2018 19:00" },
            { id: 3, text: "Interview", start_date: "04/24/2018 09:00", end_date: "04/24/2018 10:00" }
        ];

        this.scheduler.parse(events, "json");
    }
}