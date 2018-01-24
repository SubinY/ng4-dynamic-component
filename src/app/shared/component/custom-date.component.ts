import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, NgModule } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<input type="text" name="daterangeInput" daterangepicker [options]="options" (showDaterangepicker)="show($event)" (cancelDaterangepicker)="cancel($event)" (selected)="selectedDate($event, daterange)" />`,
})
export class MMAppComponent {
    // @Input() option
    public daterange: any = {};

    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: { format: 'YYYY-MM-DD' },
        alwaysShowCalendars: false,
    };

    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        // console.log(value);

        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;

        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }

    cancel(e) {
        // console.log(e);
    }
    show(e) {
        // console.log(e);
    }
}


// @NgModule({
//   declarations: [
//     MMAppComponent
//   ],
//   imports: [Daterangepicker],
//   providers: [],
//   bootstrap: []
// })
// export class MMAppModule { }